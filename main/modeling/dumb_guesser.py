import sys
import os

from generic_tools.misc import *
from specific_tools import *
import specific_tools

from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier

class DumbGuesser:
    def fit(*args,**kwargs):
        return None
    
    def predict(self, X):
        return tuple(0 for each in X)
    
train = specific_tools.create_trainer(
    classifier=DumbGuesser(),
    classifier_name="dumb_guesser",
    module_name=__name__,
)