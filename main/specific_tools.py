import math
from statistics import median, stdev
from statistics import mean as average
from collections import defaultdict

import pandas
import numpy
import pandas as pd
import numpy as np
import numpy

from sklearn.model_selection import train_test_split, KFold, StratifiedKFold
from sklearn.metrics import accuracy_score, confusion_matrix
from generic_tools.notifier import setup_notifier_if_possible
from informative_iterator import ProgressBar

from __dependencies__.blissful_basics import LazyDict, Csv, FS, super_hash, flatten, large_pickle_save, large_pickle_load, stringify, print, to_pure
from __dependencies__.quik_config import find_and_load
from __dependencies__.telepy_notify import Notifier
from __dependencies__ import blissful_basics

# 
# config
# 
if True:
    info = find_and_load(
        "main/info.yaml", # walks up folders until it finds a file with this name
        cd_to_filepath=True, # helpful if using relative paths
        fully_parse_args=True, # if you already have argparse, use parse_args=True instead
        show_help_for_no_args=False, # change if you want
    )
    config  = info.config
    path_to = info.absolute_path_to
    secrets = info.secrets


    notifier = Notifier(
        disable=not secrets.get("send_notification", False),
        token=secrets.get("telegram_token", None),
        chat_id=secrets.get("telegram_chat_id", None),
    )
    code_message = lambda value: f'<code>{value}</code>'

    stringify.onelineify_threshold = 1

# 
# 
# tools
#
# 
amnio_encoding = {
    "A": "Alanine",
    "B": "Aspartic acid (D) or Asparagine (N)",
    "C": "Cysteine",
    "D": "Aspartic acid",
    "E": "Glutamic acid",
    "F": "Phenylalanine",
    "G": "Glycine",
    "H": "Histidine",
    "I": "Isoleucine",
    "J": "Leucine (L) or Isoleucine (I)",
    "K": "Lysine",
    "L": "Leucine",
    "M": "Methionine/Start codon",
    "N": "Asparagine",
    "O": "Pyrrolysine (rare)",
    "P": "Proline",
    "Q": "Glutamine",
    "R": "Arginine",
    "S": "Serine",
    "T": "Threonine",
    "U": "Selenocysteine (rare)",
    "V": "Valine",
    "W": "Tryptophan",
    "Y": "Tyrosine",
    "Z": "Glutamic acid (E) or Glutamine (Q)",
    "X": "any",
    # "*": "translation stop",
    # "-": "gap of indeterminate length ",
}

amino_acid_simplifier = {
    "I": "J",
    "L": "J",
    
    "Q": "Z",
    "E": "Z",
    
    "D": "B",
    "N": "B",
}

physicochemical_categories = dict(
    polar= [*"NQSDECTKRHYW"],
    positive= [*"KHR"],
    negative= [*"DE"],
    charged= [*"KHRDE"],
    hydrophobic= [*"AGCTIVLKHFYWM"],
    aliphatic= [*"IVL"],
    aromatic= [*"FYWH"],
    small= [*"PNDTCAGSV"],
    tiny= [*"ASGC"],
)

def create_one_hot(obj):
    new_obj = {}
    one_hot_to_obj = defaultdict(str)
    num_possible_values = len(obj)
    zeros_array = np.zeros(num_possible_values, dtype=np.uint8)
    
    for index, key in enumerate(obj.keys()):
        new_obj[key] = np.copy(zeros_array)
        new_obj[key][index] = 1
        # convert to more efficient data type
        new_obj[key] = new_obj[key].astype(np.uint8)
        one_hot_to_obj[tuple(new_obj[key])] = key
    
    return (new_obj, lambda key: one_hot_to_obj[tuple(key)])


amino_to_one_hot, one_hot_to_amino  = create_one_hot(amnio_encoding)

def amino_sliding_window(full_amino_acid_string, lookback_size):
    max_slice_index = len(full_amino_acid_string)
    for index in range(len(full_amino_acid_string)):
        start = index-lookback_size
        end = (index+1)+lookback_size
        # slice isn't big enough
        if (index+1)+lookback_size > max_slice_index:
            break
        if start < 0:
            continue
        else:
            yield full_amino_acid_string[start:end]
    
def amino_window_to_feature_vec(amino_window):
    return numpy.array(blissful_basics.flatten(
        amino_to_one_hot[each_char] for index, each_char in enumerate(amino_window) if index != 10
    ))

def save_new_column(*, column_name, rows, path=None):
    path = path or info.absolute_path_to.atha_v10g_denovo
    df = load_atha_v10g_denovo(path)
    df[column_name] = rows
    df.to_csv(path_to.atha_v10g_denovo, sep='\t', encoding='utf-8', index=False)


def standard_load_train_test():
    # 
    # load data
    # 
    original_df = load_atha_v10g_denovo()

    # 
    # filter
    # 
    df = original_df[original_df.status == "include"]
    y = df[info.config.column_name_to_predict]
    x = df.drop(columns=[ each for each in df.columns if each not in info.config.selected_features ])
    assert len(x.columns) == len(info.config.selected_features), "Looks like one of the selected features isn't in the dataset"

    # 
    # test split 
    # 
    # 70% training and 30% test; stratify: maintain same proportion of + and - examples
    x = x.values
    y = y.values
    try:
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.301, stratify=y)
    except Exception as error:
        import code; code.interact(local={**globals(),**locals()})
    y_train = y_train.squeeze()
    y_test = y_test.squeeze()
    
    def test_accuracy_of(predict):
        # 
        # total
        # 
        y_pred = tuple(each for each in predict(x_test))
        y_test_positive, y_pred_positive = zip(*((y_test[index], y_pred[index]) for index, value in enumerate(y_pred) if value == info.config.positive_label_value))
        y_test_negative, y_pred_negative = zip(*((y_test[index], y_pred[index]) for index, value in enumerate(y_pred) if value == info.config.negative_label_value))
        total_accuracy    = accuracy_score(y_test, y_pred)
        positive_accuracy = accuracy_score(y_test_positive, y_pred_positive)
        negative_accuracy = accuracy_score(y_test_negative, y_pred_negative)
        print("    Total Accuracy:", total_accuracy)
        print("    Positive Accuracy:", positive_accuracy)
        print("    Negative Accuracy:", negative_accuracy)
        print(f'''confusion_matrix(y_test, y_pred) = {confusion_matrix(y_test, y_pred)}''')
        return dict(total_accuracy=total_accuracy, positive_accuracy=positive_accuracy, negative_accuracy=negative_accuracy)
    
    return x_train, x_test, y_train, y_test, test_accuracy_of
