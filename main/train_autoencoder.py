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

from __dependencies__.quik_config import find_and_load
from __dependencies__.cool_cache import cache
from __dependencies__.blissful_basics import Csv, FS, product, large_pickle_save, large_pickle_load, to_pure, print, LazyDict, super_hash
from __dependencies__.trivial_torch_tools import to_tensor, layer_output_shapes
from generic_tools.cross_validation import cross_validation

info = find_and_load(
    "config.yaml", # walks up folders until it finds a file with this name
    cd_to_filepath=True, # helpful if using relative paths
    fully_parse_args=True, # if you already have argparse, use parse_args=True instead
    show_help_for_no_args=False, # change if you want
)

def read_json(path):
    import json
    with open(path, 'r') as in_file:
        return json.load(in_file)

default_seed = 10275023948
torch.manual_seed(default_seed)

class Network:
    @staticmethod
    def default_setup(self, config):
        self.setup_config    = config
        self.seed            = config.get("seed"           , default_seed)
        self.suppress_output = config.get("suppress_output", False)
        self.hardware        = config.get("device"         , torch.device("cuda" if torch.cuda.is_available() else "cpu"))
        self.show = lambda *args, **kwargs: print(*args, **kwargs) if not self.suppress_output else None
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
        for each_layer in self.children():
            # if its not a loss function
            if not isinstance(each_layer, torch.nn.modules.loss._Loss):
                neuron_activations = each_layer.forward(neuron_activations)
        
        # force the output to be the correct shape
        return torch.reshape(neuron_activations, output_shape)
    
    @staticmethod
    def default_update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index):
        """
        Uses:
            self.optimizer # pytorch optimizer class
            self.forward(batch_of_inputs)
            self.loss_function(batch_of_actual_outputs, batch_of_ideal_outputs)
        """
        self.optimizer.zero_grad()
        batch_of_actual_outputs = self.forward(batch_of_inputs)
        loss = self.loss_function(batch_of_actual_outputs, batch_of_ideal_outputs)
        loss.backward()
        self.optimizer.step()
        return loss
    
    @staticmethod
    def default_fit(self, *, input_output_pairs=None, dataset=None, loader=None, batch_size=64, shuffle=True, **kwargs):
        """
        Uses:
            self.update_weights(batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index)
            self.show(args)
            self.train() # provided by pytorch's `nn.Module`
        
        Examples:
            model.fit(
                dataset=torchvision.datasets.MNIST(<mnist args>),
                epochs=4,
                batch_size=64,
            )
            
            model.fit(
                loader=torch.utils.data.DataLoader(<dataloader args>),
                epochs=4,
            )
        """
        # TODO: test input_output_pairs
        if input_output_pairs is not None:
            if shuffle:
                try:
                    len(input_output_pairs)
                    input_output_pairs = list(input_output_pairs)
                    from random import random, sample, choices, shuffle
                    shuffle(input_output_pairs)
                except Exception as error:
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
            loader = ((to_tensor(each_input_batch), to_tensor(each_output_batch)) for each_input_batch, each_output_batch in seperated_batches)
            # NOTE: shuffling isn't possible when there is no length (and generators don't have lengths). So maybe think of an alternative
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
        for epoch_index in range(kwargs.get("max_epochs", 1)):
            for batch_index, (batch_of_inputs, batch_of_ideal_outputs) in enumerate(loader):
                loss = self.update_weights(batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index)
                yield to_pure(loss)
                if batch_index % self.log_interval == 0:
                    count = batch_index * len(batch_of_inputs)
                    try:
                        total = len(loader)
                    except Exception as error:
                        total = "?"
                    self.show(f"\r[Train]: epoch: {epoch_index:>4}, batch: {count:>10}/{total}", sep='', end='', flush=True)
                
                    # TODO: add/allow checkpoints
        self.show()
    
    @staticmethod
    def wrap_loss_function(self, loss_func):
        """
        Uses:
            self.hardware
        """
        def loss_function(model_output, ideal_output):
            # convert from one-hot into number, and send tensor to device
            return loss_func(model_output, to_tensor(ideal_output).to(self.hardware))
        
        return loss_function

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
        self.input_shape              = config.get('input_shape'        , (400, ))
        self.output_shape             = config.get('output_shape'       , (10,))
        self.batch_size               = config.get('batch_size'         , 64  )
        self.number_of_layers         = config.get('number_of_layers'   , 3)
        self.activation_function_eval = config.get('activation_function_eval', "nn.ReLU()")
        self.loss_function_eval       = config.get('loss_function_eval', "F.mse_loss")
        self._config = config
        
        self.activation_function = eval(self.activation_function_eval, globals(), globals())
        self.loss_function       = Network.wrap_loss_function(self,eval(self.loss_function_eval, globals(), globals()))
        
        # 
        # layers
        # 
        self.add_module('flatten', nn.Flatten(1)) # 1 => skip the first dimension because thats the batch dimension
        for layer_index in range(self.number_of_layers-1):
            self.add_module(f'fc{layer_index}', nn.Linear(self.size_of_last_layer, int(self.size_of_last_layer*(2/3))))
            self.add_module(f'fc{layer_index}_activation', self.activation_function)
        # final layer
        self.add_module(f'fc{layer_index+1}', nn.Linear(self.size_of_last_layer, product(self.output_shape)))
        self.add_module(f'fc{layer_index+1}_activation', self.activation_function)
        
        self.to(self.hardware)
    
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
        self.input_shape      = config.get("input_shape"      , (10,))
        self.output_shape     = config.get("output_shape"     , (400, ))
        self.number_of_layers = config.get("number_of_layers" , 3)
        self.activation_function_eval = config.get('activation_function_eval', "nn.ReLU()")
        self.loss_function_eval       = config.get('loss_function_eval', "F.mse_loss")
        self._config = config
        
        self.activation_function = eval(self.activation_function_eval, globals(), globals())
        self.loss_function       = Network.wrap_loss_function(self,eval(self.loss_function_eval, globals(), globals()))
        
        # 
        # layers
        # 
        for layer_index in range(self.number_of_layers-1):
            self.add_module(f'fc{layer_index}', nn.Linear(self.size_of_last_layer, int(self.size_of_last_layer*(2/3))))
            self.add_module(f'fc{layer_index}_activation', self.activation_function)
        self.add_module(f'fc{layer_index+1}', nn.Linear(self.size_of_last_layer, product(self.output_shape)))
        self.add_module(f'fc{layer_index+1}_activation', self.activation_function)
        
        # 
        # support (optimizer, loss)
        # 
        self.to(self.hardware)
        # create an optimizer
        self.loss_function = nn.MSELoss()
    
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
        self.input_shape              = config.get('input_shape'        , (400, ))
        self.latent_shape             = config.get('latent_shape'       , (30,))
        self.output_shape             = config.get('output_shape'       , self.input_shape)
        self.learning_rate            = config.get('learning_rate'      , 0.01)
        self.momentum                 = config.get('momentum'           , 0.5 )
        self.log_interval             = config.get('log_interval'       , 100 )
        self.number_of_layers         = config.get('number_of_layers'   , 3)
        self.activation_function_eval = config.get('activation_function_eval', "nn.ReLU()")
        self.loss_function_eval       = config.get('loss_function_eval', "F.mse_loss")
        self._config = config
        
        self.activation_function = eval(self.activation_function_eval, globals(), globals())
        self.loss_function       = Network.wrap_loss_function(self,eval(self.loss_function_eval, globals(), globals()))
        
        # 
        # layers
        # 
        self.add_module('encoder', Encoder(input_shape=self.input_shape, output_shape=self.latent_shape))
        self.add_module('decoder', Decoder(input_shape=self.latent_shape, output_shape=self.output_shape))
        
        # 
        # support (optimizer, loss)
        # 
        self.to(self.hardware)
        # create an optimizer
        self.optimizer = optim.SGD(self.parameters(), lr=self.learning_rate, momentum=self.momentum)
        
    @property
    def size_of_last_layer(self):
        return product(self.input_shape if len(self._modules) == 0 else layer_output_shapes(self._modules.values(), self.input_shape)[-1])
    
    def forward(self, input_data):
        input_data.to(self.hardware)
        latent_space = self.encoder.forward(input_data)
        output = self.decoder.forward(latent_space)
        return output
        # return Network.default_forward(self, input_data)
    
    def update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index):
        return Network.default_update_weights(self, batch_of_inputs, batch_of_inputs, epoch_index, batch_index)
    
    def average_loss_for(self, batch_of_inputs, batch_of_ideal_outputs):
        batch_of_inputs = to_tensor(batch_of_inputs)
        batch_of_actual_outputs = self.forward(batch_of_inputs)
        return self.loss_function(batch_of_actual_outputs, batch_of_ideal_outputs)
        
    def fit(self, *, input_output_pairs=None, dataset=None, loader=None, max_epochs=1, batch_size=64, shuffle=True):
        return Network.default_fit(self, input_output_pairs=input_output_pairs, dataset=dataset, loader=loader, max_epochs=max_epochs, batch_size=batch_size, shuffle=shuffle,)

class AutoEncoderHelpers:
    @staticmethod
    def get_autoencode_score(hyperparameters, validation_threshold=0.05):
        """
            Arguments:
                hyperparameters.max_epochs
                hyperparameters.batch_size
                hyperparameters.latent_size
                hyperparameters.number_of_layers
                hyperparameters.learning_rate
                hyperparameters.activation_function_eval
                hyperparameters.loss_function_eval
                hyperparameters.momentum
            Example:
                parameter_score = AutoEncoderHelpers.get_autoencode_score(LazyDict(
                    max_epochs=20,
                    batch_size=64,
                    latent_size=30,
                    number_of_layers=3,
                    learning_rate=0.01,
                    momentum=0.5,
                    activation_function_eval="nn.ReLU()",
                    loss_function_eval="F.mse_loss",
                ))
        """
        number_of_folds = 4
        folds = cross_validation(
            inputs=X,
            outputs=X,
            number_of_folds=number_of_folds,
        )
        aggregate_average_validation_loss = 0
        
        with print.indent:
            for fold_index, each_fold in enumerate(folds):
                print(f'''fold: {fold_index}, sample_size: {len(each_fold["train"]["inputs"])}''')
                coder = AutoEncoder(
                    input_shape=(len(each_fold["train"]["inputs"][0]), ),
                    latent_shape=(hyperparameters.latent_size, ),
                    number_of_layers=hyperparameters.number_of_layers,
                    learning_rate=hyperparameters.learning_rate,
                    momentum=hyperparameters.momentum,
                    activation_function_eval=hyperparameters.activation_function_eval,
                    loss_function_eval=hyperparameters.loss_function_eval,
                )
                training_loss_count = 0
                training_loss_sum = 0
                fold_validation_losses = []
                with print.indent:
                    for batch_index, each_loss in enumerate(coder.fit(
                        input_output_pairs=list(zip(each_fold["train"]["inputs"], each_fold["train"]["outputs"])),
                        max_epochs=hyperparameters.max_epochs,
                        batch_size=hyperparameters.batch_size,
                        shuffle=True,
                    )):
                        training_loss_sum += each_loss
                        training_loss_count += 1
                        average_validation_loss = coder.average_loss_for(
                            batch_of_inputs=each_fold["test"]["inputs"],
                            batch_of_ideal_outputs=each_fold["test"]["outputs"],
                        )
                        fold_validation_losses.append(average_validation_loss)
                        average_training_loss = training_loss_sum/training_loss_count
                        
                        print(f'''average_training_loss = {average_training_loss}''')
                        print(f'''average_validation_loss = {average_validation_loss}''')
                        
                        if average_validation_loss*(1 - validation_threshold) > average_training_loss:
                            print(f'''stopping training early: batch_index:{batch_index}''')
                            break
                
                aggregate_average_validation_loss += min(fold_validation_losses)
        return -(aggregate_average_validation_loss/number_of_folds)
    
    @cache() # this function will only run if the inputs change
    def train_autoencoder(x, hyperparameters):
        """
            Summary:
                will only retrain if the features changed
        """
        coder = AutoEncoder(
            input_shape=(len(x[0]), ),
            latent_shape=(hyperparameters.latent_size, ),
            number_of_layers=hyperparameters.number_of_layers,
            learning_rate=hyperparameters.learning_rate,
            momentum=hyperparameters.momentum,
            activation_function_eval=hyperparameters.activation_function_eval,
            loss_function_eval=hyperparameters.loss_function_eval,
        )
        coder.fit(
            input_output_pairs=list(zip(x, x)),
            max_epochs=hyperparameters.max_epochs,
            batch_size=hyperparameters.batch_size,
            shuffle=True,
        )
        large_pickle_save(coder.to_serial_form(), info.absolute_path_to.prev_autoencoder)
        
        return coder.to_serial_form()
    
    def transform_phos_data(phos_x, autoencoder_train_x):
        coder = AutoEncoder.from_serial_form(
            AutoEncoderHelpers.train_autoencoder(
                x=autoencoder_train_x,
                hyperparameters=LazyDict(info.config.autoencoder_hyperparameters),
            )
        )
        
        return coder.encoder.forward(phos_x).detach().numpy()


# 
# read data
# 
if True:
    with open(info.absolute_path_to.negative_examples, 'r') as in_file:
        negative_inputs = json.load(in_file)
        negative_outputs = tuple(-1 for each in negative_inputs)
        print("loaded negative_examples")
    with open(info.absolute_path_to.positive_examples, 'r') as in_file:
        positive_inputs = json.load(in_file)
        positive_outputs = tuple(1 for each in positive_inputs)
        print("loaded positive_examples")

    truncate_size = 5_000_000
    X = negative_inputs[0:truncate_size] + positive_inputs[0:truncate_size]
    y = negative_outputs[0:truncate_size] + positive_outputs[0:truncate_size]

    sample_size = len(X)
    print(f'''len(y) = {len(y)}''')
    print(f'''sum(y) = {sum(y)}''')
    
transformed_x = AutoEncoderHelpers.transform_phos_data(phos_x=X, autoencoder_train_x=X)
print(f'''transformed_x = {transformed_x}''')

# 
    # TODO:
        # come up with a validation function that returns a validation and training accuracy
        # auto-try different parameters (loss function, activations, number of layers, learning rate, momentum)
        # save the one with the best validation accuracy
        
        # train it on more sequences first (not just phos sequences), then "over" train it on phos sequences (high number of epochs)
        
        # use the encoder in a regular NN 

    # large_pickle_save(coder.to_serial_form())

    # def train_and_test(X_train, X_test, y_train, y_test):
    #     # 
    #     # helper
    #     # 
    #     def test_accuracy_of(predict):
    #         print("getting accuracy scores\n")
    #         # 
    #         # total
    #         # 
    #         y_pred = predict(X_test)
    #         accuracy = accuracy_score(y_test, predict(X_test))
    #         print("Total Accuracy:", accuracy)
    #         print(f'''confusion_matrix(y_test, y_pred) = {confusion_matrix(y_test, y_pred)}''')
            
    #         positive_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == 1)
    #         positive_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == 1)
    #         positive_accuracy = accuracy_score(positive_test_outputs, predict(positive_test_inputs))
    #         print("Positive Accuracy:", positive_accuracy)
            
    #         negative_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == -1)
    #         negative_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == -1)
    #         negative_accuracy = accuracy_score(negative_test_outputs, predict(negative_test_inputs))
    #         print("Negative Accuracy:", negative_accuracy)
    #         return accuracy, positive_accuracy, negative_accuracy


    #     # 
    #     # naive_bayes_classifier
    #     # 
    #     if 0:
    #         # positive_truncate = 10_000
    #         # X = negative_inputs + positive_inputs[0:positive_truncate]
    #         # y = negative_outputs + positive_outputs[0:positive_truncate]

    #         # print(f'''len(y) = {len(y)}''')
    #         # print(f'''sum(y) = {sum(y)}''')

    #         # # Assuming you have your data and labels ready, let's call them X and y respectively
    #         # # Split the data into training and testing sets
    #         # print("splitting up the data")
    #         # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
            
    #         # Create a Random Forest Classifier object
    #         naive_bayes_classifier = GaussianNB(priors=[0.5, 0.5])

    #         # Train the naive_bayes_classifier using the training data
    #         print("training naive_bayes")
    #         naive_bayes_classifier.fit(X_train, y_train)

    #         print("naive_bayes_predictions")
    #         test_accuracy_of(naive_bayes_classifier.predict)
    #         print("\n\n")

    #     # 
    #     # SVM
    #     # 
    #     if 0:
    #         # Create a Random Forest Classifier object
    #         svm_classifier = SVC()

    #         # Train the svm_classifier using the training data
    #         print("training svm")
    #         svm_classifier.fit(X_train, y_train)

    #         print("svm_predictions")
    #         test_accuracy_of(svm_classifier.predict)
    #         print("\n\n")
        
    #     # 
    #     # random_forest
    #     # 
    #     if True:
    #         # Create a Random Forest Classifier object
    #         rf_classifier = RandomForestClassifier(n_estimators=500,max_depth=20)

    #         # Train the classifier using the training data
    #         print("training random_forest")
    #         rf_classifier.fit(X_train, y_train)
            
    #         print("random_forest_predictions")
    #         random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy = test_accuracy_of(rf_classifier.predict)
    #         print("\n\n")
            
    #         importances = rf_classifier.feature_importances_
    #         feature_names = [ str(index) for index in range(len(X[0]))]
    #         forest_importances = pd.Series(importances, index=feature_names)
            
    #         fig, ax = plt.subplots()
    #         std = numpy.std([tree.feature_importances_ for tree in rf_classifier.estimators_], axis=0)
    #         forest_importances.plot.bar(yerr=std, ax=ax)
    #         ax.set_title("Feature importances using MDI")
    #         ax.set_ylabel("Mean decrease in impurity")
    #         fig.tight_layout()
    #         FS.ensure_is_folder(FS.dirname(info.absolute_path_to.important_features_image))
    #         dpi = 400
    #         fig.set_size_inches(16, 14)  # Adjust the figure size as desired
    #         plt.savefig(info.absolute_path_to.important_features_image, dpi=400)
        
    #     # 
    #     # Neural
    #     # 
    #     if True:
    #         # Create a Random Forest Classifier object
    #         mlp_classifier = MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=1000)

    #         # Train the svm_classifier using the training data
    #         print("training mlp_classifier")
    #         mlp_classifier.fit(X_train, y_train)

    #         print("mlp_classifier_predictions")
    #         neural_accuracy, neural_positive_accuracy, neural_negative_accuracy = test_accuracy_of(mlp_classifier.predict)
    #         print("\n\n")
    #     # 
    #     # DecisionTreeClassifier
    #     # 
    #     if True:
    #         # Create a Random Forest Classifier object
    #         tree_classifier = DecisionTreeClassifier()

    #         # Train the svm_classifier using the training data
    #         print("training tree_classifier")
    #         tree_classifier.fit(X_train, y_train)

    #         print("tree_classifier_predictions")
    #         tree_accuracy, tree_positive_accuracy, tree_negative_accuracy = test_accuracy_of(tree_classifier.predict)
    #         print("\n\n")

    #     # 
    #     # Auto Neural
    #     # 
    #     if True:
    #         # maybe use a transformer like https://www.nature.com/articles/s41592-021-01252-x
    #         pass
    #         # create an autoencoder for sequences near phos sites
    #         # use prev 3 amino acids to predict next amino acid

    #     # 
    #     # combined
    #     # 

    #     def predict(X):
    #         rf_predictions = rf_classifier.predict_proba(X)
    #         mlp_predictions = mlp_classifier.predict_proba(X)
    #         predictions = [0]*len(rf_predictions)
    #         for index, probs in enumerate(zip( rf_predictions, mlp_predictions )):
    #             combined_probabilites = [ sum(each)/2.0 for each in zip(*probs)]
    #             best_label = None
    #             max_probability = -1
    #             for label_index, probability in enumerate(combined_probabilites):
    #                 if probability > max_probability:
    #                     max_probability = probability
    #                     best_label = label_index
                        
    #             predictions[index] = best_label
                    
    #         return predictions
        
    #     average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy = test_accuracy_of(predict)
        
    #     def predict(X):
    #         rf_predictions = rf_classifier.predict(X)
    #         mlp_predictions = mlp_classifier.predict(X)
    #         predictions = [0]*len(rf_predictions)
    #         for index, (rf_prediction, mlp_prediction) in enumerate(zip( rf_predictions, mlp_predictions )):
    #             if mlp_prediction == -1: # negative prediction
    #                 predictions[index] = rf_prediction
    #             else:
    #                 predictions[index] = mlp_prediction
                    
    #         return predictions
        
    #     nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy = test_accuracy_of(predict)
        
    #     def predict(X):
    #         rf_predictions = rf_classifier.predict(X)
    #         mlp_predictions = mlp_classifier.predict(X)
    #         predictions = [0]*len(rf_predictions)
    #         for index, (rf_prediction, mlp_prediction) in enumerate(zip( rf_predictions, mlp_predictions )):
    #             if mlp_prediction == 1: # negative prediction
    #                 predictions[index] = rf_prediction
    #             else:
    #                 predictions[index] = mlp_prediction
                    
    #         return predictions

    #     nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy = test_accuracy_of(predict)
        
    #     return (
    #         neural_accuracy, neural_positive_accuracy, neural_negative_accuracy,
    #         random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy,
    #         average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy,
    #         tree_accuracy, tree_positive_accuracy, tree_negative_accuracy,
    #         nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy,
    #         nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy,
    #     )

    # number_of_folds = 4
    # folds = cross_validation(
    #     inputs=X,
    #     outputs=y,
    #     number_of_folds=number_of_folds,
    # )

    # rows_of_output = []
    # for index, each in enumerate(folds):
    #     (
    #         neural_accuracy, neural_positive_accuracy, neural_negative_accuracy,
    #         random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy,
    #         average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy,
    #         tree_accuracy, tree_positive_accuracy, tree_negative_accuracy,
    #         nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy,
    #         nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy,
    #     ) = train_and_test(
    #         X_train=each["train"]["inputs"],
    #         X_test=each["test"]["inputs"],
    #         y_train=each["train"]["outputs"],
    #         y_test=each["test"]["outputs"],
    #     )
        
    #     rows_of_output.append([sample_size, info.config.feature_set, "neural",           index+1, neural_accuracy          , neural_positive_accuracy          , neural_negative_accuracy          ,])
    #     rows_of_output.append([sample_size, info.config.feature_set, "random_forest",    index+1, random_forest_accuracy   , random_forest_positive_accuracy   , random_forest_negative_accuracy   ,])
    #     rows_of_output.append([sample_size, info.config.feature_set, "tree",             index+1, tree_accuracy            , tree_positive_accuracy            , tree_negative_accuracy            ,])
    #     rows_of_output.append([sample_size, info.config.feature_set, "average_ensemble", index+1, average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy,])
    #     rows_of_output.append([sample_size, info.config.feature_set, "nn_0_fallback",    index+1, nn_0_fallback_accuracy   , nn_0_fallback_positive_accuracy   , nn_0_fallback_negative_accuracy   ,])
    #     rows_of_output.append([sample_size, info.config.feature_set, "nn_1_fallback",    index+1, nn_1_fallback_accuracy   , nn_1_fallback_positive_accuracy   , nn_1_fallback_negative_accuracy   ,])

    # # 200,000 raw features
    #     # Total Accuracy: 0.6795935855061819
    #     # confusion_matrix(y_test, y_pred) = [
    #     #     [13568  6779]
    #     #     [ 6308 14190]
    #     # ]
    #     # Positive Accuracy: 0.692262659771685
    #     # Negative Accuracy: 0.6668304909814715

    # Csv.write(
    #     path=info.path_to.recent_results,
    #     rows=rows_of_output,
    #     column_names=[ "sample_size", "feature_set", "model", "fold_number", "accuracy", "positive_accuracy", "negative_accuracy"],
    # )