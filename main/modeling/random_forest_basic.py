import sys
import os

from sklearn.model_selection import train_test_split, KFold, StratifiedKFold
from sklearn.metrics import accuracy_score, confusion_matrix
from blissful_basics import LazyDict, Csv
import pandas
# from tpot import TPOTRegressor, TPOTClassifier
import numpy

from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier

from generic_tools.misc import *
from specific_tools import *
import specific_tools
import ez_yaml

classifier_name="random_forest"
train = specific_tools.create_trainer(
    classifier=RandomForestClassifier(
        random_state=0,
    ),
    classifier_name=classifier_name,
    module_name=__name__,
)

# def test_on_full(*args, **kwargs):
#     x_train, x_test, y_train, y_test, test_accuracy_of = standard_load_train_test(path="../data/all_sites_with_features.ignore.tsv")
    
#     classifier = large_pickle_load("/Users/jeffhykin/repos/phosphorylation_analysis_new/models/default_random_forest_basic_5_1.0.ignore.pickle")
#     accuracy_info = test_accuracy_of(classifier.predict)
    
#     feature_importances = {
#         feature_name: format_float(importance)
#             for feature_name, importance in zip(config.modeling.selected_features, classifier.feature_importances_,)
#     }
#     ez_yaml.to_file(
#         obj=feature_importances,
#         file_path=(f"{info.path_to.results}/{classifier_name}__feature_importance.yaml"),
#     )
    

# def train(*args,**kwargs):
#     output = basic_train(*args, **kwargs)
#     test_on_full()
#     return output