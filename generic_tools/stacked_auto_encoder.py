import random
import pickle
import argparse
from collections import OrderedDict

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset
import numpy as np
from blissful_basics import FS


def salt_and_pepper(X, prop):
    """Noise generator"""
    X_clone = X.clone().view(-1, 1)
    num_feature = X_clone.size(0)
    mn = X_clone.min()
    mx = X_clone.max()
    indices = np.random.randint(0, num_feature, int(num_feature * prop))
    for elem in indices:
        if np.random.random() < 0.5:
            X_clone[elem] = mn
        else:
            X_clone[elem] = mx
    return X_clone.view(X.size())

class DAE(nn.Module):
    """
    Denoising auto-encoder net structure (default):
    input (in: in_dim) -->
    --> hidden layer (Linear(in: in_dim, out: out_dim), activation: LeakyReLU) -->
    --> output (Linear(in: out_dim, out: in_dim))

    """

    def __init__(self, in_dim, out_dim):
        super(DAE, self).__init__()
        """
		Args: 
			in_dim(int): input size
			out_dim(int): output(feature) size
		
		Activation func: LeakyReLU (other functions remain to be tested)
		"""
        self.in_dim = int(in_dim)
        self.out_dim = int(out_dim)
        self.encoder = nn.Sequential(
            nn.Linear(self.in_dim, self.out_dim), nn.LeakyReLU()
        )
        self.decoder = nn.Linear(self.out_dim, self.in_dim)

    def forward(self, input):
        """
        Forward calculation of the network
        Args:
                input(FloatTensor): training data in a batch (batch_size, data_size)
        """
        size = input.size()
        self.hidden_output = self.encoder(input)
        output = self.decoder(self.hidden_output)

        return output.view(size)

    def train_DAE(
        self,
        train_loader,
        device,
        learning_rate,
        loss_fn=nn.MSELoss(),
        epoch=20,
        noise_r=20,
        layer=1,
    ):
        """
        Training individual DAE. Salt and pepper noise is applied to raw training data. Adam optimization
        strategy and step-decay learning rate is used for now. Further experiments on training hyperparameters
        will be carried out.

        Args:
                train_loader(Dataloader): iterable dataloader, pack data in batches and feed them to the network.
                                                                  See torch.utils.data.DataLoader for details.
                device(CPU/GPU): device used for training.
                learning_rate(float): learning rate
                loss_fn(pytorch loss class): loss function used for optimization
                epoch(int): training epochs
                noise_r(float): Ratio of noise
                layer(int): current layer being trained



        """
        noise_fn = salt_and_pepper  # noise type

        optimizer = optim.Adam(self.parameters(), lr=learning_rate, betas=(0.5, 0.999))
        scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=6, gamma=0.2)

        for epoch in range(epoch):

            for i, data in enumerate(train_loader):
                data = data.to(
                    device
                )  # Unlike nn.module, .cuda() on tensor is not in-place
                noise_data = noise_fn(data, float(noise_r) / 100)
                noise_data = noise_data.to(device)

                output = self.forward(noise_data)
                error = loss_fn(output, data)
                if i % 10 == 0:
                    print(
                        "Layer: %d, Epoch : %d, Error: %f" % (layer, epoch + 1, error)
                    )
                error.backward()
                optimizer.step()
                optimizer.zero_grad()
            scheduler.step()

        return output


class StackDAE(nn.Module):
    def __init__(self, in_dim, out_dim, layer_num):
        super(StackDAE, self).__init__()

        stride = pow(in_dim / out_dim, 1 / (layer_num))

        self.stack_enc = nn.Sequential()
        self.stack_dec = nn.Sequential()
        # build stacked encoder
        for i in range(layer_num):
            out_dim = in_dim / stride
            self.stack_enc.add_module(
                "encoder_%d" % i,
                nn.Sequential(nn.Linear(int(in_dim), int(out_dim)), nn.LeakyReLU()),
            )
            in_dim /= stride
        # build stacked decoder
        for i in range(layer_num):
            out_dim = in_dim * stride
            self.stack_dec.add_module(
                "decoder_%d" % (layer_num - i - 1), nn.Linear(int(in_dim), int(out_dim))
            )
            in_dim *= stride

    def forward(self, input):
        self.hidden_feature = self.stack_enc(input)
        output = self.stack_dec(self.hidden_feature)
        return output

    def extract(self, input):
        print(f'''input = {input}''')
        print(f'''self.stack_enc = {self.stack_enc}''')
        feature = self.stack_enc(input)
        return feature



def select_device(force_cpu=False):
    """Choose training/visualization/extraction device based on CUDA availability"""
    cuda = False if force_cpu else torch.cuda.is_available()
    device = torch.device("cuda:0" if cuda else "cpu")

    if not cuda:
        print("Using CPU")
    if cuda:
        c = 1024**2  # bytes to MB
        ng = torch.cuda.device_count()
        x = [torch.cuda.get_device_properties(i) for i in range(ng)]
        print(
            "Using CUDA device0 _CudaDeviceProperties(name='%s', total_memory=%dMB)"
            % (x[0].name, x[0].total_memory / c)
        )
        if ng > 0:
            # torch.cuda.set_device(0)  # OPTIONAL: Set GPU ID
            for i in range(1, ng):
                print(
                    "           device%g _CudaDeviceProperties(name='%s', total_memory=%dMB)"
                    % (i, x[i].name, x[i].total_memory / c)
                )

    print("")  # skip a line
    return device

def clean_output(train_loader, stacked_net, device):
    """Feed clean data into previously trained excoder to generate clean output. Use these outputs
    to construct a new dataset for training the next autoencoder."""
    output_stack = []
    for i, data in enumerate(train_loader):
        data = data.to(device)
        output = stacked_net(data).detach().cpu()
        for j in range(output.shape[0]):
            output_stack.append(output[j])
    test_dataset = StateData(output_stack)

    return test_dataset

def train(
    train_dataset,
    output_path="model.ignore/checkpoint.pt",
    epoch=15,
    data_size=200000,
    lr=0.0002,
    workers=8,
    batch_size=640,
    out_dim=6,
    stack_num=4,
    noise_r=10,
):
    device = select_device()
    in_dim = train_dataset.shape[1]
    final_net = StackDAE(in_dim, out_dim, stack_num)

    train_loader_raw = torch.utils.data.DataLoader(
        train_dataset, batch_size=batch_size, shuffle=True
    )  # , num_workers=4, pin_memory=True

    out_dim = in_dim / 2
    stacked_enc_net = nn.Sequential()
    stacked_dec_net = nn.Sequential()
    for i in range(stack_num):
        model = DAE(in_dim, out_dim).to(device)

        if i == 0:
            model.train_DAE(
                train_loader_raw,
                device,
                learning_rate=lr,
                epoch=epoch,
                noise_r=noise_r,
                layer=i + 1,
            )
        else:
            model.train_DAE(
                train_loader,
                device,
                learning_rate=lr,
                epoch=epoch,
                noise_r=noise_r,
                layer=i + 1,
            )

        stacked_enc_net.add_module("encoder_%d" % i, model.encoder)
        stacked_dec_net.add_module("decoder_%d" % i, model.decoder)

        test_dataset = clean_output(train_loader_raw, stacked_enc_net, device)
        train_loader = torch.utils.data.DataLoader(
            test_dataset, batch_size=batch_size, shuffle=True
        )

        in_dim /= 2
        out_dim = in_dim / 2

    stacked_enc_dict = stacked_enc_net.state_dict()
    stacked_dec_dict = stacked_dec_net.state_dict()
    new_enc_dict = OrderedDict()
    new_dec_dict = OrderedDict()

    for k, v in stacked_enc_dict.items():
        name = "stack_enc." + k  # add `stack_net.` to encoder model dict
        new_enc_dict[name] = v

    for k, v in reversed(stacked_dec_dict.items()):
        name = "stack_dec." + k  # add `stack_net.` to encoder model dict
        new_dec_dict[name] = v

    new_enc_dict.update(new_dec_dict)
    new_state_dict = new_enc_dict

    # final_net.load_state_dict(new_state_dict)

    # Save trained model in 'model' folder
    chekp = {
        "in_dim": in_dim,
        "out_dim": out_dim,
        "stack_num": stack_num,
        "model": final_net.state_dict(),
    }
    
    print(f'''final_net.extract(train_dataset[0]) = {final_net.extract(train_dataset[0])}''')
    if output_path:
        FS.ensure_is_folder(FS.parent_path(output_path))
        torch.save(chekp, output_path)
        print("\nmodel stored!\n")

# 
# dataset example
# 
class StateData(Dataset):
    def __init__(self, data=None):
        self.shape = (100, 48)
        if type(data) == type(None):
            self.observations = torch.rand(*self.shape)
        else:
            self.observations = data 

    def __len__(self):
        return len(self.observations)

    def __getitem__(self, idx):
        return self.observations[idx]

# train(train_dataset=StateData())