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
import ez_yaml

basic_train = specific_tools.create_trainer(
    classifier=RandomForestClassifier(
        random_state=0,
    ),
    classifier_name="random_forest",
    module_name=__name__,
)

def train(*args, **kwargs):
    output, classifier, *other_output = basic_train(*args, **kwargs)
    
    try:
        feature_importances = {
            feature_name: importance
                for feature_name, importance in zip(config.modeling.selected_features, classifier.feature_importances_,)
        }
        ez_yaml.to_file(
            obj=feature_importances,
            file_path=(f"{info.path_to.results}/{classifier_name}_{output_postfix}_feature_importance.yaml"),
        )
    except Exception as error:
        import code; code.interact(local={**globals(),**locals()})
    return (output, classifier, *other_output)
    