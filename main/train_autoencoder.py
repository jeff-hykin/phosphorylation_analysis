import json
from os.path import join
from random import shuffle

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

import math
from random import random, sample, choices, shuffle

from __dependencies__.quik_config import find_and_load
from __dependencies__.blissful_basics import Csv, FS
from generic_tools.cross_validation import cross_validation

info = find_and_load(
    "config.yaml", # walks up folders until it finds a file with this name
    cd_to_filepath=True, # helpful if using relative paths
    fully_parse_args=True, # if you already have argparse, use parse_args=True instead
    show_help_for_no_args=False, # change if you want
)

# 
# read data
# 
with open(info.absolute_path_to.negative_examples, 'r') as in_file:
    negative_inputs = json.load(in_file)
    negative_outputs = tuple(-1 for each in negative_inputs)
    print("loaded negative_examples")
with open(info.absolute_path_to.positive_examples, 'r') as in_file:
    positive_inputs = json.load(in_file)
    positive_outputs = tuple(1 for each in positive_inputs)
    print("loaded positive_examples")

truncate_size = 50_000
X = negative_inputs[0:truncate_size] + positive_inputs[0:truncate_size]
y = negative_outputs[0:truncate_size] + positive_outputs[0:truncate_size]

sample_size = len(X)
print(f'''len(y) = {len(y)}''')
print(f'''sum(y) = {sum(y)}''')

# Assuming you have your data and labels ready, let's call them X and y respectively
# Split the data into training and testing sets
print("splitting up the data")
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=45)

import torch
from torch import nn
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
def from_one_hot_batch(tensor_batch):
    device = None
    if isinstance(tensor_batch, torch.Tensor):
        device = tensor_batch.device
    # make sure its a tensor
    tensor_batch = to_tensor(tensor_batch)
    output = tensor_batch.max(1, keepdim=True).indices.squeeze()
    # send to same device
    return output.to(device) if device else output

class Encoder(nn.Module):
    def __init__(self, **config):
        super(Encoder, self).__init__()
        # 
        # options
        # 
        Network.default_setup(self, config)
        self.input_shape     = config.get('input_shape'    , (1, 28, 28))
        self.output_shape    = config.get('output_shape'   , (10,))
        self.batch_size      = config.get('batch_size'     , 64  )
        
        # 
        # layers
        # 
        self.add_module('conv1', nn.Conv2d(1, 10, kernel_size=5))
        self.add_module('conv1_pool', nn.MaxPool2d(2))
        self.add_module('conv1_activation', nn.ReLU())
        self.add_module('conv2', nn.Conv2d(10, 10, kernel_size=5))
        self.add_module('conv2_drop', nn.Dropout2d())
        self.add_module('conv2_pool', nn.MaxPool2d(2))
        self.add_module('conv2_activation', nn.ReLU())
        self.add_module('flatten', nn.Flatten(1)) # 1 => skip the first dimension because thats the batch dimension
        self.add_module('fc1', nn.Linear(self.size_of_last_layer, product(self.output_shape)))
        self.add_module('fc1_activation', nn.ReLU())
        
    @property
    def size_of_last_layer(self):
        return product(self.input_shape if len(self._modules) == 0 else layer_output_shapes(self._modules.values(), self.input_shape)[-1])
        
    def loss_function(self, model_output, ideal_output):
        # convert from one-hot into number, and send tensor to device
        ideal_output = from_one_hot_batch(ideal_output).to(self.hardware)
        return F.nll_loss(model_output, ideal_output)

    def forward(self, input_data):
        return Network.default_forward(self, input_data)
    
    def update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index):
        return Network.default_update_weights(self, batch_of_inputs, batch_of_ideal_outputs, epoch_index, batch_index)
        
    def fit(self, *, input_output_pairs=None, dataset=None, loader=None, max_epochs=1, batch_size=64, shuffle=True):
        return Network.default_fit(self, input_output_pairs=input_output_pairs, dataset=dataset, loader=loader, max_epochs=max_epochs, batch_size=batch_size, shuffle=shuffle,)

def train_and_test(X_train, X_test, y_train, y_test):
    # 
    # helper
    # 
    def test_accuracy_of(predict):
        print("getting accuracy scores\n")
        # 
        # total
        # 
        y_pred = predict(X_test)
        accuracy = accuracy_score(y_test, predict(X_test))
        print("Total Accuracy:", accuracy)
        print(f'''confusion_matrix(y_test, y_pred) = {confusion_matrix(y_test, y_pred)}''')
        
        positive_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == 1)
        positive_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == 1)
        positive_accuracy = accuracy_score(positive_test_outputs, predict(positive_test_inputs))
        print("Positive Accuracy:", positive_accuracy)
        
        negative_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == -1)
        negative_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == -1)
        negative_accuracy = accuracy_score(negative_test_outputs, predict(negative_test_inputs))
        print("Negative Accuracy:", negative_accuracy)
        return accuracy, positive_accuracy, negative_accuracy


    # 
    # naive_bayes_classifier
    # 
    if 0:
        # positive_truncate = 10_000
        # X = negative_inputs + positive_inputs[0:positive_truncate]
        # y = negative_outputs + positive_outputs[0:positive_truncate]

        # print(f'''len(y) = {len(y)}''')
        # print(f'''sum(y) = {sum(y)}''')

        # # Assuming you have your data and labels ready, let's call them X and y respectively
        # # Split the data into training and testing sets
        # print("splitting up the data")
        # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Create a Random Forest Classifier object
        naive_bayes_classifier = GaussianNB(priors=[0.5, 0.5])

        # Train the naive_bayes_classifier using the training data
        print("training naive_bayes")
        naive_bayes_classifier.fit(X_train, y_train)

        print("naive_bayes_predictions")
        test_accuracy_of(naive_bayes_classifier.predict)
        print("\n\n")

    # 
    # SVM
    # 
    if 0:
        # Create a Random Forest Classifier object
        svm_classifier = SVC()

        # Train the svm_classifier using the training data
        print("training svm")
        svm_classifier.fit(X_train, y_train)

        print("svm_predictions")
        test_accuracy_of(svm_classifier.predict)
        print("\n\n")
    
    # 
    # random_forest
    # 
    if True:
        # Create a Random Forest Classifier object
        rf_classifier = RandomForestClassifier(n_estimators=500,max_depth=20)

        # Train the classifier using the training data
        print("training random_forest")
        rf_classifier.fit(X_train, y_train)
        
        print("random_forest_predictions")
        random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy = test_accuracy_of(rf_classifier.predict)
        print("\n\n")
        
        importances = rf_classifier.feature_importances_
        feature_names = [ str(index) for index in range(len(X[0]))]
        forest_importances = pd.Series(importances, index=feature_names)
        
        fig, ax = plt.subplots()
        std = numpy.std([tree.feature_importances_ for tree in rf_classifier.estimators_], axis=0)
        forest_importances.plot.bar(yerr=std, ax=ax)
        ax.set_title("Feature importances using MDI")
        ax.set_ylabel("Mean decrease in impurity")
        fig.tight_layout()
        FS.ensure_is_folder(FS.dirname(info.absolute_path_to.important_features_image))
        dpi = 400
        fig.set_size_inches(16, 14)  # Adjust the figure size as desired
        plt.savefig(info.absolute_path_to.important_features_image, dpi=400)
    
    # 
    # Neural
    # 
    if True:
        # Create a Random Forest Classifier object
        mlp_classifier = MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=1000)

        # Train the svm_classifier using the training data
        print("training mlp_classifier")
        mlp_classifier.fit(X_train, y_train)

        print("mlp_classifier_predictions")
        neural_accuracy, neural_positive_accuracy, neural_negative_accuracy = test_accuracy_of(mlp_classifier.predict)
        print("\n\n")
    # 
    # DecisionTreeClassifier
    # 
    if True:
        # Create a Random Forest Classifier object
        tree_classifier = DecisionTreeClassifier()

        # Train the svm_classifier using the training data
        print("training tree_classifier")
        tree_classifier.fit(X_train, y_train)

        print("tree_classifier_predictions")
        tree_accuracy, tree_positive_accuracy, tree_negative_accuracy = test_accuracy_of(tree_classifier.predict)
        print("\n\n")

    # 
    # Auto Neural
    # 
    if True:
        # maybe use a transformer like https://www.nature.com/articles/s41592-021-01252-x
        pass
        # create an autoencoder for sequences near phos sites
        # use prev 3 amino acids to predict next amino acid

    # 
    # combined
    # 

    def predict(X):
        rf_predictions = rf_classifier.predict_proba(X)
        mlp_predictions = mlp_classifier.predict_proba(X)
        predictions = [0]*len(rf_predictions)
        for index, probs in enumerate(zip( rf_predictions, mlp_predictions )):
            combined_probabilites = [ sum(each)/2.0 for each in zip(*probs)]
            best_label = None
            max_probability = -1
            for label_index, probability in enumerate(combined_probabilites):
                if probability > max_probability:
                    max_probability = probability
                    best_label = label_index
                    
            predictions[index] = best_label
                
        return predictions
    
    average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy = test_accuracy_of(predict)
    
    def predict(X):
        rf_predictions = rf_classifier.predict(X)
        mlp_predictions = mlp_classifier.predict(X)
        predictions = [0]*len(rf_predictions)
        for index, (rf_prediction, mlp_prediction) in enumerate(zip( rf_predictions, mlp_predictions )):
            if mlp_prediction == -1: # negative prediction
                predictions[index] = rf_prediction
            else:
                predictions[index] = mlp_prediction
                
        return predictions
    
    nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy = test_accuracy_of(predict)
    
    def predict(X):
        rf_predictions = rf_classifier.predict(X)
        mlp_predictions = mlp_classifier.predict(X)
        predictions = [0]*len(rf_predictions)
        for index, (rf_prediction, mlp_prediction) in enumerate(zip( rf_predictions, mlp_predictions )):
            if mlp_prediction == 1: # negative prediction
                predictions[index] = rf_prediction
            else:
                predictions[index] = mlp_prediction
                
        return predictions

    nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy = test_accuracy_of(predict)
    
    return (
        neural_accuracy, neural_positive_accuracy, neural_negative_accuracy,
        random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy,
        average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy,
        tree_accuracy, tree_positive_accuracy, tree_negative_accuracy,
        nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy,
        nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy,
    )

number_of_folds = 4
folds = cross_validation(
    inputs=X,
    outputs=y,
    number_of_folds=number_of_folds,
)

rows_of_output = []
for index, each in enumerate(folds):
    (
        neural_accuracy, neural_positive_accuracy, neural_negative_accuracy,
        random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy,
        average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy,
        tree_accuracy, tree_positive_accuracy, tree_negative_accuracy,
        nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy,
        nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy,
    ) = train_and_test(
        X_train=each["train"]["inputs"],
        X_test=each["test"]["inputs"],
        y_train=each["train"]["outputs"],
        y_test=each["test"]["outputs"],
    )
    
    rows_of_output.append([sample_size, info.config.feature_set, "neural",           index+1, neural_accuracy          , neural_positive_accuracy          , neural_negative_accuracy          ,])
    rows_of_output.append([sample_size, info.config.feature_set, "random_forest",    index+1, random_forest_accuracy   , random_forest_positive_accuracy   , random_forest_negative_accuracy   ,])
    rows_of_output.append([sample_size, info.config.feature_set, "tree",             index+1, tree_accuracy            , tree_positive_accuracy            , tree_negative_accuracy            ,])
    rows_of_output.append([sample_size, info.config.feature_set, "average_ensemble", index+1, average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy,])
    rows_of_output.append([sample_size, info.config.feature_set, "nn_0_fallback",    index+1, nn_0_fallback_accuracy   , nn_0_fallback_positive_accuracy   , nn_0_fallback_negative_accuracy   ,])
    rows_of_output.append([sample_size, info.config.feature_set, "nn_1_fallback",    index+1, nn_1_fallback_accuracy   , nn_1_fallback_positive_accuracy   , nn_1_fallback_negative_accuracy   ,])

# 200,000 raw features
    # Total Accuracy: 0.6795935855061819
    # confusion_matrix(y_test, y_pred) = [
    #     [13568  6779]
    #     [ 6308 14190]
    # ]
    # Positive Accuracy: 0.692262659771685
    # Negative Accuracy: 0.6668304909814715

Csv.write(
    path=info.path_to.recent_results,
    rows=rows_of_output,
    column_names=[ "sample_size", "feature_set", "model", "fold_number", "accuracy", "positive_accuracy", "negative_accuracy"],
)