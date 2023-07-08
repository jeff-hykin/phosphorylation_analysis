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

print(f'''len(y) = {len(y)}''')
print(f'''sum(y) = {sum(y)}''')

# Assuming you have your data and labels ready, let's call them X and y respectively
# Split the data into training and testing sets
print("splitting up the data")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=43)


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
    # Create a Random Forest Classifier object
    naive_bayes_classifier = GaussianNB()

    # Train the naive_bayes_classifier using the training data
    print("training naive_bayes")
    naive_bayes_classifier.fit(X_train, y_train)

    print("naive_bayes_predictions")
    test_accuracy_of(naive_bayes_classifier.predict)
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
    
    print("naive_bayes_predictions")
    test_accuracy_of(rf_classifier.predict)
    print("\n\n")


# 
# combined
# 
real_naive_bayes_predict = naive_bayes_classifier.predict
real_rf_classifier_predict = rf_classifier.predict

def predict(X):
    naive_bayes_predictions = real_naive_bayes_predict(X)
    rf_predictions = real_rf_classifier_predict(X)
    predictions = [0]*len(rf_predictions)
    for index, (each_naive_bayes, each_rf) in enumerate(zip(naive_bayes_predictions, rf_predictions)):
        # Naive bayes is good at positive accuracy
        if each_naive_bayes == 1:
            predictions[index] = 1
        else:
            predictions[index] = each_rf
    return predictions

print("combined")
test_accuracy_of(predict)

# default parameters, 200,000 samples, uniprotId based filtering, physico-chemical features NOT present
    # Total Accuracy: 0.5420136381869234
    # confusion_matrix(y_test, y_pred) = [
    #  [14539 25473]
    #  [ 3071 19242]
    # ]
    # Positive Accuracy: 0.8623672298659975
    # Negative Accuracy: 0.36336599020293914

# default parameters, 200,000 samples, uniprotId based filtering, physico-chemical features present
    # Total Accuracy: 0.5420136381869234
    # confusion_matrix(y_test, y_pred) = [
    #  [14539 25473]
    #  [ 3071 19242]
    # ]
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
    