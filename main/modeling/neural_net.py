import sys
import os

from sklearn.model_selection import train_test_split, KFold, StratifiedKFold
from sklearn.metrics import accuracy_score, confusion_matrix
from blissful_basics import LazyDict, Csv
import pandas
from tpot import TPOTRegressor, TPOTClassifier
import numpy

from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier

from generic_tools.misc import *
from specific_tools import *
import specific_tools

train = specific_tools.create_trainer(
    classifier=MLPClassifier(hidden_layer_sizes=(20),activation='tanh',solver='lbfgs',max_iter=100000),
    classifier_name="neural_net",
    module_name=__name__,
)