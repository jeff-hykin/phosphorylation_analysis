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

import math
from random import random, sample, choices, shuffle

from __dependencies__.quik_config import find_and_load
from __dependencies__.blissful_basics import Csv
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
    negative_outputs = tuple(0 for each in negative_inputs)
    print("loaded negative_examples")
with open(info.absolute_path_to.positive_examples, 'r') as in_file:
    positive_inputs = json.load(in_file)
    positive_outputs = tuple(1 for each in positive_inputs)
    print("loaded positive_examples")

truncate_size = 1_000_000
X = negative_inputs[0:truncate_size] + positive_inputs[0:truncate_size]
y = negative_outputs[0:truncate_size] + positive_outputs[0:truncate_size]

sample_size = len(X)
print(f'''len(y) = {len(y)}''')
print(f'''sum(y) = {sum(y)}''')

# Assuming you have your data and labels ready, let's call them X and y respectively
# Split the data into training and testing sets
print("splitting up the data")
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=45)

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
        
        negative_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == 0)
        negative_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == 0)
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
            if mlp_prediction == 0: # negative prediction
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
    path=config.path_to.recent_results,
    rows=rows_of_output,
    column_names=[ "sample_size", "feature_set", "model", "fold_number", "accuracy", "positive_accuracy", "negative_accuracy"],
)