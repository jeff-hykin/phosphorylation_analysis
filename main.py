import json
from os.path import join

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

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
rf_classifier = RandomForestClassifier()

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
    accuracy = accuracy_score(y_test, rf_classifier.predict(X_test))
    print("Total Accuracy:", accuracy)
 
    accuracy = accuracy_score(positive_outputs, rf_classifier.predict(positive_inputs))
    print("Positive Accuracy:", accuracy)
    
    accuracy = accuracy_score(negative_outputs, rf_classifier.predict(negative_inputs))
    print("Negative Accuracy:", accuracy)


# loaded negative_examples
# loaded positive_examples
# splitting up the data
# training
# getting accuracy scores

# Total Accuracy: 0.5799498075568159
# Positive Accuracy: 0.8671307823275812
# Negative Accuracy: 0.8583430185840357
