import sys
import os

from generic_tools.misc import *
from specific_tools import *
import specific_tools

from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier

train = specific_tools.create_trainer(
    classifier=DecisionTreeClassifier(),
    classifier_name="decision_tree",
    module_name=__name__,
)