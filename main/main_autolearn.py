import json
from os.path import join
from random import shuffle

from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix
from sklearn.datasets import make_classification
import pandas as pd
import matplotlib.pyplot as plt
import numpy

import math
from random import random, sample, choices, shuffle

from __dependencies__.autosklearn.classification import AutoSklearnClassifier
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
    
    
    model = AutoSklearnClassifier(time_left_for_this_task=2*60, pre_run_time_limit=30, n_jobs=8)
    model.fit(X_train, y_train)
    print(f'''model.sprint_statistics() = {model.sprint_statistics()}''')
    predict = model.predict
    
    return test_accuracy_of(predict)

number_of_folds = 4
folds = cross_validation(
    inputs=X,
    outputs=y,
    number_of_folds=number_of_folds,
)

rows_of_output = []
for index, each in enumerate(folds):
    outputs = train_and_test(
        X_train=each["train"]["inputs"],
        X_test=each["test"]["inputs"],
        y_train=each["train"]["outputs"],
        y_test=each["test"]["outputs"],
    )
    
    rows_of_output.append([sample_size, info.config.feature_set, "neural",           index+1, *outputs          ,])

Csv.write(
    path="autolearned.csv",
    rows=rows_of_output,
    column_names=[ "sample_size", "feature_set", "model", "fold_number", "accuracy", "positive_accuracy", "negative_accuracy"],
)