import json
import math
from os.path import join
from random import random, sample, choices, shuffle

from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix
from sklearn.svm import SVC
from sklearn.neural_network import MLPClassifier
from sklearn.tree import DecisionTreeClassifier
import pandas as pd
import matplotlib.pyplot as plt
import numpy
import torch
import torch.nn.functional as F
from torch import nn
import torch.optim as optim
import torch.nn.utils as utils
import pandas
from torch.utils.data import Dataset

from __dependencies__.quik_config import find_and_load
from __dependencies__.informative_iterator import ProgressBar
from __dependencies__.cool_cache import cache
from __dependencies__.blissful_basics import Csv, FS, product, large_pickle_save, large_pickle_load, to_pure, print, LazyDict, super_hash, drop_end, linear_steps, arg_max
from __dependencies__.trivial_torch_tools import to_tensor, layer_output_shapes, Sequential, core
from generic_tools.cross_validation import cross_validation

from main import read_filtered_data, info, read_data, read_full_data, main

ProgressBar.layout = [ 'bar', 'title', 'percent', 'spacer', 'fraction', 'spacer', 'remaining_time', 'spacer', 'end_time', 'spacer', 'duration', 'spacer', ]


# 
# Autoencoder definitions
# 
if True:
    class IndexDataset(Dataset):
        def __init__(self, *data_sources, re_indexer, length=None):
            self.re_indexer = re_indexer
            self.data_sources = data_sources
            self.length = length

        def __len__(self):
            return self.length or len(self.re_indexer)

        def __getitem__(self, index):
            return tuple(each[self.re_indexer[index]] for each in self.data_sources)
        
    class SimpleDataset(Dataset):
        def __init__(self, *data_sources, length=None):
            self.data_sources = data_sources
            self.length = length

        def __len__(self):
            return self.length or len(self.data_sources[0])

        def __getitem__(self, index):
            return tuple(each[index] for each in self.data_sources)
    
        def cross_validation(self, number_of_folds, should_randomize=True):
            from random import shuffle
            number_of_samples = len(self.data_sources[0][0])
            fold_size = math.floor(number_of_samples / number_of_folds)
            folds = []
            
            indicies = list(range(number_of_samples))
            if should_randomize: shuffle(indicies)
            
            for index in range(number_of_folds):
                start = index * fold_size
                end = number_of_samples if index == number_of_folds - 1 else (index + 1) * fold_size
                train_indices = []
                test_indices = []
                
                copy_of_indicies = list(indicies)
                
                for j in range(number_of_samples):
                    if j >= start and j < end:
                        test_indices.append(copy_of_indicies.pop())
                    else:
                        train_indices.append(copy_of_indicies.pop())
                
                # 
                # uses iterators to avoid memory usage and up-front computation
                # 
                indexer = to_tensor(train_indices).long()
                folds.append((
                    IndexDataset(
                        *self.data_sources,
                        re_indexer=to_tensor(train_indices).long(),
                    ),
                    IndexDataset(
                        *self.data_sources,
                        re_indexer=to_tensor(test_indices).long(),
                    ),
                ))

            return folds
    
    class Network:
        @staticmethod
        def default_setup(self, config):
            self.grad_clip_value = 1000
            self.setup_config    = config
            self.seed            = config.get("seed"           , default_seed)
            self.suppress_output = config.get("suppress_output", False)
            self.hardware        = config.get("device"         , core.default_device)
            self.show = lambda *args, **kwargs: print(*args, **kwargs) if not self.suppress_output else None
            self.to(self.hardware)
        
        def default_init(self, config):
            import torch.nn.init as init
            for each_layer in self.children():
                # if its not a loss function
                if not isinstance(each_layer, torch.nn.modules.loss._Loss) and hasattr(each_layer, "weight"):
                    init.xavier_uniform_(each_layer.weight)
                    if each_layer.bias is not None:
                        init.zeros_(each_layer.bias)
            self.to(self.hardware)
        
        @staticmethod
        def default_forward(self, input_data):
            """
            Uses:
                self.hardware
                self.input_shape
                self.output_shape
            Arguments:
                input_data:
                    either an input tensor or batch of tensors
            Ouptut:
                ether an output tensor or a batch of outputs
            Examples:
                obj.forward(torch.tensor([
                    # first image in batch
                    [
                        # red layer
                        [
                            [ 1, 2, 3 ],
                            [ 4, 5, 6] 
                        ], 
                        # blue layer
                        [
                            [ 1, 2, 3 ],
                            [ 4, 5, 6] 
                        ], 
                        # green layer
                        [
                            [ 1, 2, 3 ],
                            [ 4, 5, 6] 
                        ],
                    ] 
                ]))
            
            """
            # converts to torch if needed
            input_data = to_tensor(input_data).type(torch.float).to(self.hardware)
            
            # 
            # batch or not?
            # 
            is_a_batch = len(input_data.shape) > len(self.input_shape)
            if not is_a_batch: 
                batch_size = 1
                # convert images into batches
                input_data = torch.reshape(input_data, (1, *input_data.shape))
                output_shape = self.output_shape
            else:
                batch_size = tuple(input_data.shape)[0]
                output_shape = (batch_size, *self.output_shape)
            
            # 
            # forward pass
            # 
            neuron_activations = input_data
            for each_layer in self.layers:
                # if its not a loss function
                if not isinstance(each_layer, torch.nn.modules.loss._Loss):
                    neuron_activations = each_layer.forward(neuron_activations)
                    if torch.isnan(neuron_activations).any():
                        import code; code.interact(local={**globals(),**locals()})
                        raise Exception(f'''nan output from neurons.\nComing from:{repr(self)}\n\nSpecifically this layer: {repr(each_layer)}\nCausing this output:{neuron_activations}''', )
            
            # force the output to be the correct shape
            return torch.reshape(neuron_activations, output_shape)
        
        @staticmethod
        def default_update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index):
            """
            Uses:
                self.grad_clip_value
                self.optimizer # pytorch optimizer class
                self.forward(batch_of_inputs)
                self.loss_function(batch_of_actual_outputs, batch_of_ideal_outputs)
            """
            self.optimizer.zero_grad()
            batch_of_actual_outputs = self.forward(batch_of_inputs)
            loss = self.loss_function(batch_of_actual_outputs, batch_of_ideal_outputs)
            loss.backward()
            if self.grad_clip_value != None:
                utils.clip_grad_norm_(self.parameters(), self.grad_clip_value)
            self.optimizer.step()
            return loss
        
        @staticmethod
        def default_fit(self, *, input_output_pairs=None, dataset=None, loader=None, batch_size=64, shuffle=True, **kwargs):
            """
                Uses:
                    self.update_weights(batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index)
                        self.optimizer # pytorch optimizer class
                        self.forward(batch_of_inputs)
                        self.loss_function(batch_of_actual_outputs, batch_of_ideal_outputs)
                    self.show(args)
                    self.train() # provided by pytorch's `nn.Module`
                
                Examples:
                    for epoch_index, batch_index, loss in model.fit(
                        dataset=torchvision.datasets.MNIST(<mnist args>),
                        epochs=4,
                        batch_size=64,
                    ):
                        pass
                    
                    for epoch_index, batch_index, loss in model.fit(
                        loader=torch.utils.data.DataLoader(<dataloader args>),
                        epochs=4,
                    ):
                        pass
            """
            # TODO: test input_output_pairs
            if input_output_pairs is not None:
                if shuffle:
                    try:
                        len(input_output_pairs)
                        if isinstance(input_output_pairs, torch.Tensor):
                            indexes = torch.randperm(input_output_pairs.shape[0])
                            input_output_pairs = input_output_pairs[indexes]
                        else:
                            input_output_pairs = list(input_output_pairs)
                            from random import random, sample, choices, shuffle
                            shuffle(input_output_pairs)
                    except Exception as error:
                        # NOTE: shuffling isn't possible when there is no length (and generators don't have lengths). So maybe think of an alternative
                        pass
                # creates batches
                def bundle(iterable, bundle_size):
                    next_bundle = []
                    for each in iterable:
                        next_bundle.append(each)
                        if len(next_bundle) == bundle_size:
                            yield tuple(next_bundle)
                            next_bundle = []
                    # return any half-made bundles
                    if len(next_bundle) > 0:
                        yield tuple(next_bundle)
                # unpair, batch, then re-pair the inputs and outputs
                input_generator        = (each for each, _ in input_output_pairs)
                ideal_output_generator = (each for _   , each in input_output_pairs)
                seperated_batches = zip(bundle(input_generator, batch_size), bundle(ideal_output_generator, batch_size))
                loader = tuple(
                    (
                        to_tensor(each_input_batch).to(self.hardware),
                        to_tensor(each_output_batch).to(self.hardware)
                    )
                        for each_input_batch, each_output_batch in seperated_batches
                )
            else:
                # convert the dataset into a loader (assumming loader was not given)
                if isinstance(dataset, torch.utils.data.Dataset):
                    loader = torch.utils.data.DataLoader(
                        dataset,
                        batch_size=batch_size,
                        shuffle=shuffle,
                    )
            
            train_losses = []
            self.train()
            max_epochs = kwargs.get("max_epochs", 1)
            accumulated_batches = 0
            try:
                total = len(loader)
            except Exception as error:
                total = "?"
            for epoch_progress, epoch_index in ProgressBar(max_epochs, title=f"[Train {self.__class__.__name__}]"):
                for batch_progress, data in ProgressBar(loader, title="Batch Progress"):
                    if len(data) == 1: # autoencoder
                        batch_of_inputs = batch_of_ideal_outputs = data[0]
                    else:
                        (batch_of_inputs, batch_of_ideal_outputs) = data
                    batch_index = batch_progress.index
                    accumulated_batches += 1
                    loss = self.update_weights(batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index)
                    yield epoch_index, batch_index, to_pure(loss)
                    if batch_index+1 == total or batch_index % self.log_interval == 0:
                        pass
                        # self.show(f"\r    [Train {self.__class__.__name__}]: overall: {round(accumulated_batches/(total*max_epochs)*100):>3}%, epoch: {epoch_index:>4}, batch: {batch_index+1:>10}/{total}", sep='', end='', flush=True)
                    
                        # TODO: add/allow checkpoints
            self.show()
        
        @staticmethod
        def wrap_loss_function(self, loss_func):
            """
            Uses:
                self.hardware
            """
            def loss_function(model_output, ideal_output):
                try:
                    # convert from one-hot into number, and send tensor to device
                    return loss_func(
                        to_tensor(model_output).to(self.hardware).squeeze(),
                        to_tensor(ideal_output).to(self.hardware).squeeze()
                    )
                except Exception as error:
                    print(f'''model_output = {model_output}''')
                    print(f'''ideal_output = {ideal_output}''')
                    import code; code.interact(local={**globals(),**locals()})
                    exit()
            
            return loss_function
        
        @staticmethod
        def wrap_activation_function(activation_function):
            """
            Uses:
                self.hardware
            """
            if isinstance(activation_function, nn.Module):
                return activation_function
            else:
                class ActivationFunction(nn.Module):
                    def forward(self, x):
                        return activation_function(x)
                return ActivationFunction()

    class SimpleSerial:
        """
        Uses:
            self._config
        """
        def to_serial_form(self):
            config = dict(self._config)
            try:
                del config["device"]
            except Exception as error:
                pass
            return (config, self.state_dict())
        
        @classmethod
        def from_serial_form(cls, data):
            (config, state_dict) = data
            output = cls(**config)
            output.load_state_dict(state_dict)
            return output

    class Encoder(nn.Module, SimpleSerial):
        def __init__(self, **config):
            super(Encoder, self).__init__()
            # 
            # options
            # 
            Network.default_setup(self, config)
            self._config = config = {
                **dict(
                    input_shape= (400, ),
                    output_shape= (10,),
                    batch_size= 64  ,
                    number_of_layers= 3,
                    activation_function_eval= "nn.ReLU()",
                    loss_function_eval= "F.mse_loss",
                ),
                **config,
            }
            self.input_shape              = config['input_shape']
            self.output_shape             = config['output_shape']
            self.batch_size               = config['batch_size']
            self.number_of_layers         = config['number_of_layers']
            self.activation_function_eval = config['activation_function_eval']
            self.loss_function_eval       = config['loss_function_eval']
            
            self.activation_function = Network.wrap_activation_function(eval(self.activation_function_eval, globals(), globals()))
            self.loss_function       = Network.wrap_loss_function(self,eval(self.loss_function_eval, globals(), globals()))
            
            # 
            # layers
            # 
            self.layers = Sequential()
            self.layers.add_module('flatten', nn.Flatten(1)) # 1 => skip the first dimension because thats the batch dimension
            for layer_index in range(self.number_of_layers-1):
                self.layers.add_module(f'fc{layer_index}', nn.Linear(self.size_of_last_layer, int(self.size_of_last_layer*(2/3))))
                self.layers.add_module(f'fc{layer_index}_activation', self.activation_function)
            # final layer
            self.layers.add_module(f'fc{layer_index+1}', nn.Linear(self.size_of_last_layer, product(self.output_shape)))
            self.layers.add_module(f'fc{layer_index+1}_activation', self.activation_function)
            
            Network.default_init(self, config)
        
        @property
        def size_of_last_layer(self):
            return product(self.input_shape if len(self._modules) == 0 else layer_output_shapes(self._modules.values(), self.input_shape)[-1])
            
        def forward(self, input_data):
            return Network.default_forward(self, input_data)
        
        def update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index):
            return Network.default_update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index)
            
        def fit(self, *, input_output_pairs=None, dataset=None, loader=None, max_epochs=1, batch_size=64, shuffle=True):
            return Network.default_fit(self, input_output_pairs=input_output_pairs, dataset=dataset, loader=loader, max_epochs=max_epochs, batch_size=batch_size, shuffle=shuffle,)

    class Decoder(nn.Module, SimpleSerial):
        def __init__(self, **config):
            super(Decoder, self).__init__()
            # 
            # options
            # 
            Network.default_setup(self, config)
            self._config = config = {
                **dict(
                    input_shape= (10, ),
                    output_shape= (400,),
                    batch_size= 64  ,
                    number_of_layers= 3,
                    activation_function_eval= "nn.ReLU()",
                    loss_function_eval= "F.mse_loss",
                ),
                **config,
            }
            self.input_shape              = config['input_shape']
            self.output_shape             = config['output_shape']
            self.batch_size               = config['batch_size']
            self.number_of_layers         = config['number_of_layers']
            self.activation_function_eval = config['activation_function_eval']
            self.loss_function_eval       = config['loss_function_eval']
            
            self.activation_function = Network.wrap_activation_function(eval(self.activation_function_eval, globals(), globals()))
            self.loss_function       = Network.wrap_loss_function(self,eval(self.loss_function_eval, globals(), globals()))
            
            # 
            # layers
            # 
            self.layers = Sequential()
            for layer_index in range(self.number_of_layers-1):
                self.layers.add_module(f'fc{layer_index}', nn.Linear(self.size_of_last_layer, int(self.size_of_last_layer*(2/3))))
                self.layers.add_module(f'fc{layer_index}_activation', self.activation_function)
            self.layers.add_module(f'fc{layer_index+1}', nn.Linear(self.size_of_last_layer, product(self.output_shape)))
            self.layers.add_module(f'fc{layer_index+1}_activation', self.activation_function)
            
            # 
            # support (optimizer, loss)
            # 
            Network.default_init(self, config)
        
        @property
        def size_of_last_layer(self):
            return product(self.input_shape if len(self._modules) == 0 else layer_output_shapes(self._modules.values(), self.input_shape)[-1])
            
        def forward(self, input_data):
            return Network.default_forward(self, input_data)
        
        def update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index):
            return Network.default_update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index)
            
        def fit(self, *, input_output_pairs=None, dataset=None, loader=None, max_epochs=1, batch_size=64, shuffle=True):
            return Network.default_fit(self, input_output_pairs=input_output_pairs, dataset=dataset, loader=loader, max_epochs=max_epochs, batch_size=batch_size, shuffle=shuffle,)
        
    class AutoEncoder(nn.Module, SimpleSerial):
        def __init__(self, **config):
            super(AutoEncoder, self).__init__()
            # 
            # options
            # 
            Network.default_setup(self, config)
            self._config = config = {
                **dict(
                    input_shape=(400, ),
                    latent_shape=(30,),
                    learning_rate=0.01,
                    momentum=0.5,
                    log_interval=100 ,
                    number_of_layers=3,
                    activation_function_eval="nn.ReLU()",
                    loss_function_eval="F.mse_loss",
                ),
                **config,
            }
            self.input_shape              = config['input_shape']
            self.latent_shape             = config['latent_shape']
            self.learning_rate            = config['learning_rate']
            self.momentum                 = config['momentum']
            self.log_interval             = config['log_interval']
            self.number_of_layers         = config['number_of_layers']
            self.activation_function_eval = config['activation_function_eval']
            self.loss_function_eval       = config['loss_function_eval']
            
            self.output_shape             = config['input_shape']
            self.activation_function = Network.wrap_activation_function(eval(self.activation_function_eval, globals(), globals()))
            self.loss_function       = Network.wrap_loss_function(self,eval(self.loss_function_eval, globals(), globals()))
            
            self.encoder = Encoder(input_shape=self.input_shape, output_shape=self.latent_shape)
            self.decoder = Decoder(input_shape=self.latent_shape, output_shape=self.output_shape)
            # 
            # layers
            #
            self.layers = Sequential() 
            self.layers.add_module('encoder', Encoder(input_shape=self.input_shape, output_shape=self.latent_shape))
            self.layers.add_module('decoder', Decoder(input_shape=self.latent_shape, output_shape=self.output_shape))
            
            # 
            # support (optimizer, loss)
            # 
            Network.default_init(self, config)
            # create an optimizer
            self.optimizer = optim.SGD(self.parameters(), lr=self.learning_rate, momentum=self.momentum)
            
        @property
        def size_of_last_layer(self):
            return product(self.input_shape if len(self._modules) == 0 else layer_output_shapes(self._modules.values(), self.input_shape)[-1])
        
        def forward(self, input_data):
            # input_data.to(self.hardware)
            # latent_space = self.encoder.forward(input_data)
            # output = self.decoder.forward(latent_space)
            # return output
            return Network.default_forward(self, input_data)
        
        def update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index):
            return Network.default_update_weights(self, batch_of_inputs, batch_of_inputs, epoch_index, batch_index)
        
        def average_loss_for(self, batch_of_inputs, batch_of_ideal_outputs):
            batch_of_inputs = to_tensor(batch_of_inputs)
            batch_of_actual_outputs = self.forward(batch_of_inputs)
            return self.loss_function(batch_of_actual_outputs, batch_of_ideal_outputs)
            
        def fit(self, *, input_output_pairs=None, dataset=None, loader=None, max_epochs=1, batch_size=64, shuffle=True):
            return Network.default_fit(self, input_output_pairs=input_output_pairs, dataset=dataset, loader=loader, max_epochs=max_epochs, batch_size=batch_size, shuffle=shuffle,)

# 
# classifier definitions
# 
class PhosTransferClassifier(nn.Module, SimpleSerial):
    def __init__(self, **config):
        super(PhosTransferClassifier, self).__init__()
        # 
        # options
        # 
        Network.default_setup(self, config)
        self._config = config = {
            **dict(
                log_interval=10,
            ),
            **config,
        }
        coder = AutoEncoder.from_serial_form(config["seralized_coder"])
        
        self.input_shape                    = coder.encoder.input_shape
        self.output_shape                   = config["output_shape"]
        self.log_interval                   = config["log_interval"]
        self.number_of_layers               = config["number_of_layers"]
        self.activation_function_eval       = config['activation_function_eval']
        self.final_activation_function_eval = config['final_activation_function_eval']
        self.loss_function_eval             = config['loss_function_eval']
        self.learning_rate                  = config['learning_rate']
        self.momentum                       = config['momentum']
        
        self.activation_function       = Network.wrap_activation_function(eval(self.activation_function_eval, globals(), globals()))
        self.final_activation_function = Network.wrap_activation_function(eval(self.final_activation_function_eval, globals(), globals()))
        self.loss_function             = Network.wrap_loss_function(self,eval(self.loss_function_eval, globals(), globals()))
        output_size = product(self.output_shape)
        
        # 
        # layers
        # 
        self.layers = Sequential()
        self.layers.add_module(f'encoder', coder.encoder)
        layer_index = 0
        for layer_index, layer_size in enumerate(drop_end(1, linear_steps(start=product(self.input_shape), end=output_size, quantity=self.number_of_layers-1))):
            self.layers.add_module(f'fc{layer_index}', nn.Linear(self.size_of_last_layer, layer_size))
            self.layers.add_module(f'fc{layer_index}_activation', self.activation_function)
        self.layers.add_module(f'fc{layer_index+1}', nn.Linear(self.size_of_last_layer, output_size))
        self.layers.add_module(f'fc{layer_index+1}_activation', self.final_activation_function)
        
        # 
        # support (optimizer, loss)
        # 
        Network.default_init(self, config)
        self.optimizer = optim.SGD(self.parameters(), lr=self.learning_rate, momentum=self.momentum)
    
    @property
    def size_of_last_layer(self):
        return product(self.input_shape if len(self._modules) == 0 else layer_output_shapes(self._modules.values(), self.input_shape)[-1])
        
    def forward(self, input_data):
        return Network.default_forward(self, input_data)
    
    def update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index):
        try:
            return Network.default_update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index)
        except Exception as error:
            import code; code.interact(local={**globals(),**locals()}); exit()
        
    def fit(self, *, input_output_pairs=None, dataset=None, loader=None, max_epochs=1, batch_size=64, shuffle=True):
        return Network.default_fit(self, input_output_pairs=input_output_pairs, dataset=dataset, loader=loader, max_epochs=max_epochs, batch_size=batch_size, shuffle=shuffle,)
    
    def get_accuracies_and_loss(self, inputs, outputs):
        model_test_outputs = self.forward(to_tensor(inputs).to(self.hardware))
        guesses = (torch.round(model_test_outputs+1/2).squeeze()*2)-1 # converting from (-1 to 1) to (0 to 1) and then back to (-1 to 1)
        outputs = to_tensor(outputs).to(self.hardware)
        
        flags_for_positive_inputs = guesses == 1
        positive_guesses, positive_outputs = guesses[flags_for_positive_inputs], outputs[flags_for_positive_inputs]
        negative_guesses, negative_outputs = guesses[~flags_for_positive_inputs], outputs[~flags_for_positive_inputs]
        
        loss                   = to_pure(self.loss_function(model_test_outputs, outputs))
        correct_count          = to_pure(torch.sum((guesses == outputs).float()))
        accuracy               = to_pure(torch.mean((guesses == outputs).float()))
        positive_correct_count = to_pure(torch.sum((positive_guesses == positive_outputs).float()))
        positive_accuracy      = to_pure(torch.mean((positive_guesses == positive_outputs).float()))
        negative_correct_count = to_pure(torch.sum((negative_guesses == negative_outputs).float()))
        negative_accuracy      = to_pure(torch.mean((negative_guesses == negative_outputs).float()))
        return loss, correct_count, accuracy, positive_correct_count, positive_accuracy, negative_correct_count, negative_accuracy


# 
# main logic
# 
from collections import namedtuple
class AutoEncoderHelpers:
    @staticmethod
    @cache() # this function will only run if the inputs change
    def train_autoencoder(x, hyperparameters):
        """
            Summary:
                will only retrain if the features changed
        """
        dataset = SimpleDataset(
            to_tensor(x).to(core.default_device)
        )
        # folds = dataset.cross_validation(
        #     number_of_folds=hyperparameters.number_of_folds,
        # )
        # aggregate_metrics = LazyDict(
        #     average_training_loss=[],
        #     average_validation_loss=[],
        # )
        # number_of_epochs_before_stopping = []
        
        # with print.indent:
        #     for fold_progress, (train_dataset, test_dataset) in ProgressBar(folds, title=f"""Autoencoder Fold progress"""):
        #         fold_index = fold_progress.index
        #         model = AutoEncoder(
        #             input_shape=(len(train_dataset[0][0]), ),
        #             latent_shape=(hyperparameters.latent_size, ),
        #             number_of_layers=hyperparameters.number_of_layers,
        #             learning_rate=hyperparameters.learning_rate,
        #             momentum=hyperparameters.momentum,
        #             activation_function_eval=hyperparameters.activation_function_eval,
        #             loss_function_eval=hyperparameters.loss_function_eval,
        #         )
        #         training_loss_count = 0
        #         training_loss_sum = 0
        #         metrics = []
        #         number_of_epochs_before_stopping.append(hyperparameters.max_epochs)
        #         with print.indent:
        #             for epoch_index, batch_index, each_loss in model.fit(
        #                 dataset=train_dataset,
        #                 max_epochs=hyperparameters.max_epochs,
        #                 batch_size=hyperparameters.batch_size,
        #                 shuffle=True,
        #             ):
        #                 training_loss_sum += each_loss
        #                 training_loss_count += 1
        #                 average_training_loss    = training_loss_sum/training_loss_count
                        
        #                 test_inputs = test_dataset.data_sources[0]
        #                 average_validation_loss = to_pure(model.loss_function(
        #                     model.forward(test_inputs), 
        #                     test_inputs,
        #                 ))
        #                 print(f'''\ntraining_loss:{average_training_loss:.3f}, validation_loss:{average_validation_loss:.3f}''')
        #                 metrics.append(
        #                     (
        #                         average_training_loss,
        #                         average_validation_loss,
        #                     )
        #                 )
                        
        #                 # print(f'''fold:{fold_index:>2}, average_training_loss    = {average_training_loss}''')
        #                 # print(f'''fold:{fold_index:>2}, average_validation_loss  = {average_validation_loss}''')
        #                 # print(f'''fold:{fold_index:>2}, validation_correct_count = {validation_correct_count}''')
        #                 # print(f'''fold:{fold_index:>2}, validation_accuracy      = {validation_accuracy}''')
                        
        #                 if epoch_index > hyperparameters.min_epochs and average_validation_loss*(1 - hyperparameters.validation_threshold) > average_training_loss:
        #                     print(f'''    stopping training early: epoch_index:{epoch_index}, batch_index:{batch_index}''')
        #                     number_of_epochs_before_stopping[-1] = epoch_index # note: equivlent to -1, which is good cause early stopping means we've gone too far
        #                     break
                    
        #         best_run_within_fold = arg_max(args=metrics, values=tuple(-average_validation_loss for (average_training_loss, average_validation_loss,) in metrics))
        #         # add them to aggregate_metrics
        #         for (each_key, each_list), each_new_value in zip(aggregate_metrics.items(), best_run_within_fold):
        #             each_list.append(each_new_value)
                
        #         # save
        #         pandas.DataFrame(aggregate_metrics).to_csv(info.absolute_path_to.autoencoder_losses)
        
        # from statistics import median
        # train using ideal number of epochs on whole dataset
        for epoch_index, batch_index, each_loss in model.fit(
            dataset=dataset,
            max_epochs=hyperparameters.max_epochs,
            batch_size=hyperparameters.batch_size,
            shuffle=True,
        ):
            pass
        
        output = model.to_serial_form()
        large_pickle_save(output, info.absolute_path_to.prev_autoencoder)
        
        return output
    
    @staticmethod
    def transform_phos_data(phos_x, autoencoder_train_x):
        coder = AutoEncoder.from_serial_form(
            AutoEncoderHelpers.train_autoencoder(
                x=autoencoder_train_x,
                hyperparameters=LazyDict(info.config.autoencoder_hyperparameters),
            )
        )
        
        return coder.encoder.forward(phos_x).cpu().detach().numpy()

    @staticmethod
    def create_classifier_from_coder(seralized_coder):
        return PhosTransferClassifier(
            seralized_coder=seralized_coder,
            output_shape=(1, ), # binary classifier
            learning_rate=info.config.phos_classifier_hyperparameters.learning_rate,
            momentum=info.config.phos_classifier_hyperparameters.momentum,
            number_of_layers=info.config.phos_classifier_hyperparameters.number_of_layers,
            activation_function_eval=info.config.phos_classifier_hyperparameters.activation_function_eval,
            final_activation_function_eval=info.config.phos_classifier_hyperparameters.final_activation_function_eval,
            loss_function_eval=info.config.phos_classifier_hyperparameters.loss_function_eval,
        )
    
    @staticmethod
    def evaluate_phos_classifier(seralized_coder, inputs, outputs, number_of_folds, hyperparameters, validation_threshold=0.05):
        """
            Example:
                fold_metrics = evaluate_phos_classifier(
                    inputs=X,
                    outputs=y,
                    number_of_folds=4,
                    seralized_coder=AutoEncoderHelpers.train_autoencoder(
                        x=autoencoder_train_x,
                        hyperparameters=LazyDict(info.config.autoencoder_hyperparameters),
                    ),
                    hyperparameters=LazyDict(
                        max_epochs=20,
                        batch_size=64,
                    ),
                )
        """
        folds = cross_validation(
            inputs,
            outputs,
            number_of_folds=number_of_folds,
        )
        print(f'''len(folds) = {len(folds)}''')
        aggregate_metrics = LazyDict(
            average_training_loss=[],
            average_validation_loss=[],
            validation_correct_count=[],
            validation_accuracy=[],
            positive_correct_count=[],
            positive_accuracy=[],
            negative_correct_count=[],
            negative_accuracy=[],
        )
        print("evaluating phos classifier")
        with print.indent:
            for fold_progress, each_fold in ProgressBar(folds, title=f"""Fold progress"""):
                fold_index = fold_progress.index
                training_inputs, training_outputs = each_fold["train"]
                testing_inputs, testing_outputs  = each_fold["test"]
                model = AutoEncoderHelpers.create_classifier_from_coder(seralized_coder)
                training_loss_count = 0
                training_loss_sum = 0
                metrics = []
                with print.indent:
                    for epoch_index, batch_index, each_loss in model.fit(
                        input_output_pairs=list(zip(training_inputs, training_outputs)),
                        max_epochs=hyperparameters.max_epochs,
                        batch_size=hyperparameters.batch_size,
                        shuffle=True,
                    ):
                        training_loss_sum += each_loss
                        training_loss_count += 1
                        average_training_loss    = training_loss_sum/training_loss_count
                        
                        (
                            average_validation_loss,
                            validation_correct_count,
                            validation_accuracy,
                            positive_correct_count,
                            positive_accuracy,
                            negative_correct_count,
                            negative_accuracy
                        ) = model.get_accuracies_and_loss(
                            inputs=testing_inputs,
                            outputs=testing_outputs
                        )
                        
                        metrics.append(
                            (
                                average_training_loss,
                                average_validation_loss,
                                validation_correct_count,
                                validation_accuracy,
                                positive_correct_count,
                                positive_accuracy,
                                negative_correct_count,
                                negative_accuracy,
                            )
                        )
                        
                        # print(f'''fold:{fold_index:>2}, average_training_loss    = {average_training_loss}''')
                        # print(f'''fold:{fold_index:>2}, average_validation_loss  = {average_validation_loss}''')
                        # print(f'''fold:{fold_index:>2}, validation_correct_count = {validation_correct_count}''')
                        # print(f'''fold:{fold_index:>2}, validation_accuracy      = {validation_accuracy}''')
                        
                        if average_validation_loss*(1 - validation_threshold) > average_training_loss:
                            print(f'''    stopping training early: epoch_index:{epoch_index}, batch_index:{batch_index}''')
                            break
                    
                best_run_within_fold = arg_max(args=metrics, values=tuple( validation_accuracy for (average_training_loss, average_validation_loss, validation_correct_count, validation_accuracy, positive_correct_count, positive_accuracy, negative_correct_count, negative_accuracy) in metrics))
                # add them to aggregate_metrics
                for (each_key, each_list), each_new_value in zip(aggregate_metrics.items(), best_run_within_fold):
                    each_list.append(each_new_value)
                
                # save
                pandas.DataFrame(aggregate_metrics).to_csv(info.absolute_path_to.transfer_autoencoder_results)
        
        return aggregate_metrics

# 
# read data
# 
if True:
    full_x, *_ = read_full_data()
    X, y, genes, sample_size = read_filtered_data()

#
# evaluate 
#  
if 0:
    # transformed_x = AutoEncoderHelpers.transform_phos_data(phos_x=X, autoencoder_train_x=X)
    fold_metrics = AutoEncoderHelpers.evaluate_phos_classifier(
        inputs=X,
        outputs=y,
        number_of_folds=4,
        seralized_coder=AutoEncoderHelpers.train_autoencoder(
            x=full_x,
            hyperparameters=LazyDict(info.config.autoencoder_hyperparameters),
        ),
        hyperparameters=LazyDict(
            max_epochs=20,
            batch_size=1024*2,
        ),
    )
    import pandas
    fold_metrics = pandas.DataFrame(fold_metrics)
    print(fold_metrics)
    fold_metrics.to_csv(info.absolute_path_to.transfer_autoencoder_results)

# 
# run normal classifiers
# 
if True:
    X = AutoEncoderHelpers.transform_phos_data(X, full_x)
    main(X, y, genes, sample_size)