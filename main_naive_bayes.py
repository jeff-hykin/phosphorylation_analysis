import json
from os.path import join
from random import shuffle

from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
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

# Assuming you have your data and labels ready, let's call them X and y respectively
# Split the data into training and testing sets
print("splitting up the data")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=43)

# Create a Random Forest Classifier object
classifier = GaussianNB()

# Train the classifier using the training data
print("training")
classifier.fit(X_train, y_train)

# 
# test
# 
if True:
    print("getting accuracy scores\n")
    # 
    # total
    # 
    y_pred = classifier.predict(X_test)
    accuracy = accuracy_score(y_test, classifier.predict(X_test))
    print("Total Accuracy:", accuracy)
    print(f'''confusion_matrix(y_test, y_pred) = {confusion_matrix(y_test, y_pred)}''')
    
    positive_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == 1)
    positive_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == 1)
    accuracy = accuracy_score(positive_test_outputs, classifier.predict(positive_test_inputs))
    print("Positive Accuracy:", accuracy)
    
    negative_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == 0)
    negative_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == 0)
    accuracy = accuracy_score(negative_test_outputs, classifier.predict(negative_test_inputs))
    print("Negative Accuracy:", accuracy)


# default parameters, 200,000 samples, uniprotId based filtering, physico-chemical features NOT present
    # Total Accuracy: 0.5420136381869234
    # confusion_matrix(y_test, y_pred) = [[14539 25473]
    #  [ 3071 19242]]
    # Positive Accuracy: 0.8623672298659975
    # Negative Accuracy: 0.36336599020293914

# default parameters, 200,000 samples, uniprotId based filtering, physico-chemical features present
    # Total Accuracy: 0.5420136381869234
    # confusion_matrix(y_test, y_pred) = [[14539 25473]
    #  [ 3071 19242]]
    # Positive Accuracy: 0.8623672298659975
    # Negative Accuracy: 0.36336599020293914

# default parameters, 50,000 samples, uniprotId based filtering, physico-chemical features present
    # Total Accuracy: 0.62175
    # confusion_matrix(y_test, y_pred) = [
    #     [4525 5510]
    #     [2055 7910]
    # ]
    # Positive Accuracy: 0.7937782237832414
    # Negative Accuracy: 0.45092177379172893

# default parameters, 5000 samples, uniprotId based filtering
    # Total Accuracy: 0.6375
    # confusion_matrix(y_test, y_pred) = [
    #     [585 427]
    #     [298 690]
    # ]
    # Positive Accuracy: 0.6983805668016194
    # Negative Accuracy: 0.5780632411067194