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

X = negative_inputs + positive_inputs
y = negative_outputs + positive_outputs


print("splitting up the data")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


from libsvm.svmutil import *


# Create an SVM problem
problem = svm_problem(y_train, X_train)

model = svm_load_model('s-model.txt')
# Train the SVM
# model = svm_train(problem, svm_parameter('-s 0 -t 0'))

# Create a test example
correct_count = 0
for features, label in zip(X_test, y_test):
    predicted_label, _, _ = svm_predict([0], [features], model)
    if predicted_label == label:
        correct_count += 1

print(f'''correct_count = {correct_count}/{len(y_test)}''')