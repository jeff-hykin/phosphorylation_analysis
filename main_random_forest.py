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

# Assuming you have your data and labels ready, let's call them X and y respectively
# Split the data into training and testing sets
print("splitting up the data")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a Random Forest Classifier object
rf_classifier = RandomForestClassifier(n_estimators=500,max_depth=20)

# Train the classifier using the training data
print("training")
rf_classifier.fit(X_train, y_train)

# 
# test
# 
if True:
    print("getting accuracy scores\n")
    # 
    # total
    # 
    y_pred = rf_classifier.predict(X_test)
    accuracy = accuracy_score(y_test, rf_classifier.predict(X_test))
    print("Total Accuracy:", accuracy)
    print(f'''confusion_matrix(y_test, y_pred) = {confusion_matrix(y_test, y_pred)}''')
    
    positive_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == 1)
    positive_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == 1)
    accuracy = accuracy_score(positive_test_outputs, rf_classifier.predict(positive_test_inputs))
    print("Positive Accuracy:", accuracy)
    
    negative_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == 0)
    negative_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == 0)
    accuracy = accuracy_score(negative_test_outputs, rf_classifier.predict(negative_test_inputs))
    print("Negative Accuracy:", accuracy)


# n_estimators=500,max_depth=20, 50,000 samples, uniprotId based filtering
    # Total Accuracy: 0.64575
    # confusion_matrix(y_test, y_pred) = [
    #     [7035 3000]
    #     [4085 5880]
    # ]
    # Positive Accuracy: 0.5900652282990466
    # Negative Accuracy: 0.7010463378176383

# n_estimators=100,max_depth=None
    # loaded negative_examples
    # loaded positive_examples
    # splitting up the data
    # training
    # getting accuracy scores

    # Total Accuracy: 0.5799498075568159
    # Positive Accuracy: 0.8671307823275812
    # Negative Accuracy: 0.8583430185840357
