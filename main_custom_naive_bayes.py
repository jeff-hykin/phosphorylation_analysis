import json
from os.path import join

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix

# 
# read data
# 
import os
__dirname__ = os.path.dirname(__file__)
with open(join(__dirname__, './negative_examples.json'), 'r') as in_file:
    negative_inputs = json.load(in_file)
    negative_outputs = tuple(0 for each in negative_inputs)
    print("loaded negative_examples")
with open(join(__dirname__, './positive_examples.json'), 'r') as in_file:
    positive_inputs = json.load(in_file)
    positive_outputs = tuple(1 for each in positive_inputs)
    print("loaded positive_examples")

x = negative_inputs + positive_inputs
y = negative_outputs + positive_outputs

# Assuming you have your data and labels ready, let's call them x and y respectively
# Split the data into training and testing sets
print("splitting up the data")
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

window_padding = 10

# 
# train
# 
if True:
    number_of_training_samples = len(x_train)
    number_of_features = len(x_train[0])
    
    number_of_positive_training_samples = 0
    for label in y_train:
        if label == 1:
            number_of_positive_training_samples += 1
    number_of_negative_training_samples = number_of_training_samples - number_of_positive_training_samples
    proportion_of_positive_samples = number_of_positive_training_samples / float(number_of_training_samples)
    proportion_of_negative_samples = 1.0 - proportion_of_positive_samples

    counts = {}
    for each_sample, each_label in zip(x_train, y_test):
        for feature_index in range(number_of_features):
            each_x_feature = each_sample[feature_index]
            if (feature_index, each_x_feature, each_label) not in counts:
                counts[(feature_index, each_x_feature, each_label)] = 0
            counts[(feature_index, each_x_feature, each_label)] += 1

    conditional_probabilities = {}
    for feature_index in range(number_of_features):
        for amino_acid in "ACDEFGHIKLMNPQRSTVWY":
            conditional_probabilities[(feature_index, amino_acid, 1)] = counts.get((feature_index, amino_acid, 1), 0) / float(number_of_positive_training_samples)
            conditional_probabilities[(feature_index, amino_acid, 0)] = counts.get((feature_index, amino_acid, 0), 0) / float(number_of_negative_training_samples)

    print(proportion_of_positive_samples, proportion_of_negative_samples)

    print("phos")
    for amino_acid in "ACDEFGHIKLMNPQRSTVWY":
        print( amino_acid,)
        for feature_index in range(number_of_features):
            print("%5.3f" % (conditional_probabilities[(feature_index, amino_acid, 1)]), )
        print()

    print("non-phos")
    for amino_acid in "ACDEFGHIKLMNPQRSTVWY":
        print(
            amino_acid,
        )
        for feature_index in range(number_of_features):
            print(
                "%5.3f" % (conditional_probabilities[(feature_index, amino_acid, 0)]),
            )
        print()

# 
# testing
# 
if True:
    print("testing...")

    pseudo_count = 0.00001
    positive_label = 1
    negative_label = 0
    def predict(amino_acid_sequence):
        log_pos, log_neg = math.log(proportion_of_positive_samples), math.log(proportion_of_negative_samples)
        for index, amino_acid in enumerate(amino_acid_sequence):
            if index == window_padding:
                continue  # skip S in middle
            log_pos += math.log(pseudo_count + conditional_probabilities.get((index, amino_acid, positive_label), 0))
            log_neg += math.log(pseudo_count + conditional_probabilities.get((index, amino_acid, negative_label), 0))
        return 1 if log_pos > log_neg else 0
        # could return normalized prob
        # Ppos,Pneg = exp(log_pos),exp(log_neg)
        # return Ppos/(Ppos+Pneg)


    correct = 0
    y_true, y_pred = [], []
    for each_sample, each_label in zip(x_test, y_test):
        each_prediction = predict(each_sample)
        if each_label == each_prediction:
            correct += 1
        y_true.append(each_label)
        y_pred.append(each_prediction)

    print("correct=%s, Ntest=%s, acc=%0.3f" % (correct, Ntest, correct / float(Ntest)))
    print(
        "rows are true class (0=not phos; 1=phosphorylated); cols are predicted class labels"
    )
    print(confusion_matrix(y_true, y_pred, labels=[0, 1]))
