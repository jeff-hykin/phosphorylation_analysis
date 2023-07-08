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

print(f'''len(y) = {len(y)}''')
print(f'''sum(y) = {sum(y)}''')

# Assuming you have your data and labels ready, let's call them X and y respectively
# Split the data into training and testing sets
print("splitting up the data")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


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
    accuracy = accuracy_score(positive_test_outputs, predict(positive_test_inputs))
    print("Positive Accuracy:", accuracy)
    
    negative_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == 0)
    negative_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == 0)
    accuracy = accuracy_score(negative_test_outputs, predict(negative_test_inputs))
    print("Negative Accuracy:", accuracy)

# 
# naive_bayes_classifier
# 
if True:
    positive_truncate = 10_000
    X = negative_inputs + positive_inputs[0:positive_truncate]
    y = negative_outputs + positive_outputs[0:positive_truncate]

    print(f'''len(y) = {len(y)}''')
    print(f'''sum(y) = {sum(y)}''')

    # Assuming you have your data and labels ready, let's call them X and y respectively
    # Split the data into training and testing sets
    print("splitting up the data")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
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
if True:
    X = negative_inputs + positive_inputs
    y = negative_outputs + positive_outputs

    # Assuming you have your data and labels ready, let's call them X and y respectively
    # Split the data into training and testing sets
    print("splitting up the data")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

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
    X = negative_inputs + positive_inputs
    y = negative_outputs + positive_outputs

    # Assuming you have your data and labels ready, let's call them X and y respectively
    # Split the data into training and testing sets
    print("splitting up the data")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create a Random Forest Classifier object
    mlp_classifier = MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=1000)

    # Train the svm_classifier using the training data
    print("training mlp_classifier")
    mlp_classifier.fit(X_train, y_train)

    print("mlp_classifier_predictions")
    test_accuracy_of(mlp_classifier.predict)
    print("\n\n")

# 
# random_forest
# 
if True:
    
    X = negative_inputs + positive_inputs
    y = negative_outputs + positive_outputs

    print(f'''len(y) = {len(y)}''')
    print(f'''sum(y) = {sum(y)}''')

    # Assuming you have your data and labels ready, let's call them X and y respectively
    # Split the data into training and testing sets
    print("splitting up the data")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Create a Random Forest Classifier object
    rf_classifier = RandomForestClassifier(n_estimators=500,max_depth=20)

    # Train the classifier using the training data
    print("training random_forest")
    rf_classifier.fit(X_train, y_train)
    
    print("random_forest_predictions")
    test_accuracy_of(rf_classifier.predict)
    print("\n\n")


# 
# combined
# 
real_naive_bayes_predict = naive_bayes_classifier.predict_proba
real_rf_classifier_predict = rf_classifier.predict_proba

def predict(X):
    naive_bayes_predictions = real_naive_bayes_predict(X)
    rf_predictions = real_rf_classifier_predict(X)
    svm_predictions = svm_classifier.predict_proba(X)
    predictions = [0]*len(rf_predictions)
    for index, probs in enumerate(zip( rf_predictions, svm_predictions, mlp_classifier )):
        combined_probabilites = [ sum(each)/2.0 for each in zip(*probs)]
        best_label = None
        max_probability = -1
        for label_index, probability in enumerate(combined_probabilites):
            if probability > max_probability:
                max_probability = probability
                best_label = label_index
                
        predictions[index] = best_label
            
    return predictions

print("combined")
test_accuracy_of(predict)
