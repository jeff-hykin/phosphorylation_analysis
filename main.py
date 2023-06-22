import json
from os.path import join

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 
# read data
# 
with open(join(__dirname__, './negative_examples.json'), 'r') as in_file:
    negative_inputs = json.load(in_file)
    negative_outputs = tuple(0 for each in negative_inputs)
with open(join(__dirname__, './positive_examples.json'), 'r') as in_file:
    positive_inputs = json.load(in_file)
    positive_outputs = tuple(1 for each in positive_inputs)

X = negative_inputs + positive_inputs
y = negative_outputs + positive_outputs

# Assuming you have your data and labels ready, let's call them X and y respectively
# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a Random Forest Classifier object
rf_classifier = RandomForestClassifier()

# Train the classifier using the training data
rf_classifier.fit(X_train, y_train)

# 
# test
# 
if True:
    # 
    # total
    # 
    accuracy = accuracy_score(y_test, rf_classifier.predict(X_test))
    print("Total Accuracy:", accuracy)
 
    accuracy = accuracy_score(positive_outputs, rf_classifier.predict(positive_inputs))
    print("Positive Accuracy:", accuracy)
    
    accuracy = accuracy_score(negative_outputs, rf_classifier.predict(negative_inputs))
    print("Negative Accuracy:", accuracy)
