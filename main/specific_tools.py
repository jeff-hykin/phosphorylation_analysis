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

from __dependencies__.informative_iterator import ProgressBar
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
lookback_size = info.config.lookback_size # usually == 10 
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

def generate_onehot(index, size):
    vec = [0]*size
    vec[index] = 1
    return vec
    
basic_feature_names = []
for char_position in range(0, (lookback_size*2)+1):
    if char_position == lookback_size:
        continue
    
    for amino_enum, _ in enumerate(amnio_encoding.keys()):
        which_amino = one_hot_to_amino(generate_onehot(amino_enum,len(amnio_encoding)))
        basic_feature_names.append(
            f"{which_amino}@{char_position}"
        )
# ['A@0', 'B@0', 'C@0', 'D@0', 'E@0', 'F@0', 'G@0', 'H@0', 'I@0', 'J@0', 'K@0', 'L@0', 'M@0', 'N@0', 'O@0', 'P@0', 'Q@0', 'R@0', 'S@0', 'T@0', 'U@0', 'V@0', 'W@0', 'Y@0', 'Z@0', 'X@0', 'A@1', 'B@1', 'C@1', 'D@1', 'E@1', 'F@1', 'G@1', 'H@1', 'I@1', 'J@1', 'K@1', 'L@1', 'M@1', 'N@1', 'O@1', 'P@1', 'Q@1', 'R@1', 'S@1', 'T@1', 'U@1', 'V@1', 'W@1', 'Y@1', 'Z@1', 'X@1', 'A@2', 'B@2', 'C@2', 'D@2', 'E@2', 'F@2', 'G@2', 'H@2', 'I@2', 'J@2', 'K@2', 'L@2', 'M@2', 'N@2', 'O@2', 'P@2', 'Q@2', 'R@2', 'S@2', 'T@2', 'U@2', 'V@2', 'W@2', 'Y@2', 'Z@2', 'X@2', 'A@3', 'B@3', 'C@3', 'D@3', 'E@3', 'F@3', 'G@3', 'H@3', 'I@3', 'J@3', 'K@3', 'L@3', 'M@3', 'N@3', 'O@3', 'P@3', 'Q@3', 'R@3', 'S@3', 'T@3', 'U@3', 'V@3', 'W@3', 'Y@3', 'Z@3', 'X@3', 'A@4', 'B@4', 'C@4', 'D@4', 'E@4', 'F@4', 'G@4', 'H@4', 'I@4', 'J@4', 'K@4', 'L@4', 'M@4', 'N@4', 'O@4', 'P@4', 'Q@4', 'R@4', 'S@4', 'T@4', 'U@4', 'V@4', 'W@4', 'Y@4', 'Z@4', 'X@4', 'A@5', 'B@5', 'C@5', 'D@5', 'E@5', 'F@5', 'G@5', 'H@5', 'I@5', 'J@5', 'K@5', 'L@5', 'M@5', 'N@5', 'O@5', 'P@5', 'Q@5', 'R@5', 'S@5', 'T@5', 'U@5', 'V@5', 'W@5', 'Y@5', 'Z@5', 'X@5', 'A@6', 'B@6', 'C@6', 'D@6', 'E@6', 'F@6', 'G@6', 'H@6', 'I@6', 'J@6', 'K@6', 'L@6', 'M@6', 'N@6', 'O@6', 'P@6', 'Q@6', 'R@6', 'S@6', 'T@6', 'U@6', 'V@6', 'W@6', 'Y@6', 'Z@6', 'X@6', 'A@7', 'B@7', 'C@7', 'D@7', 'E@7', 'F@7', 'G@7', 'H@7', 'I@7', 'J@7', 'K@7', 'L@7', 'M@7', 'N@7', 'O@7', 'P@7', 'Q@7', 'R@7', 'S@7', 'T@7', 'U@7', 'V@7', 'W@7', 'Y@7', 'Z@7', 'X@7', 'A@8', 'B@8', 'C@8', 'D@8', 'E@8', 'F@8', 'G@8', 'H@8', 'I@8', 'J@8', 'K@8', 'L@8', 'M@8', 'N@8', 'O@8', 'P@8', 'Q@8', 'R@8', 'S@8', 'T@8', 'U@8', 'V@8', 'W@8', 'Y@8', 'Z@8', 'X@8', 'A@9', 'B@9', 'C@9', 'D@9', 'E@9', 'F@9', 'G@9', 'H@9', 'I@9', 'J@9', 'K@9', 'L@9', 'M@9', 'N@9', 'O@9', 'P@9', 'Q@9', 'R@9', 'S@9', 'T@9', 'U@9', 'V@9', 'W@9', 'Y@9', 'Z@9', 'X@9', 'A@11', 'B@11', 'C@11', 'D@11', 'E@11', 'F@11', 'G@11', 'H@11', 'I@11', 'J@11', 'K@11', 'L@11', 'M@11', 'N@11', 'O@11', 'P@11', 'Q@11', 'R@11', 'S@11', 'T@11', 'U@11', 'V@11', 'W@11', 'Y@11', 'Z@11', 'X@11', 'A@12', 'B@12', 'C@12', 'D@12', 'E@12', 'F@12', 'G@12', 'H@12', 'I@12', 'J@12', 'K@12', 'L@12', 'M@12', 'N@12', 'O@12', 'P@12', 'Q@12', 'R@12', 'S@12', 'T@12', 'U@12', 'V@12', 'W@12', 'Y@12', 'Z@12', 'X@12', 'A@13', 'B@13', 'C@13', 'D@13', 'E@13', 'F@13', 'G@13', 'H@13', 'I@13', 'J@13', 'K@13', 'L@13', 'M@13', 'N@13', 'O@13', 'P@13', 'Q@13', 'R@13', 'S@13', 'T@13', 'U@13', 'V@13', 'W@13', 'Y@13', 'Z@13', 'X@13', 'A@14', 'B@14', 'C@14', 'D@14', 'E@14', 'F@14', 'G@14', 'H@14', 'I@14', 'J@14', 'K@14', 'L@14', 'M@14', 'N@14', 'O@14', 'P@14', 'Q@14', 'R@14', 'S@14', 'T@14', 'U@14', 'V@14', 'W@14', 'Y@14', 'Z@14', 'X@14', 'A@15', 'B@15', 'C@15', 'D@15', 'E@15', 'F@15', 'G@15', 'H@15', 'I@15', 'J@15', 'K@15', 'L@15', 'M@15', 'N@15', 'O@15', 'P@15', 'Q@15', 'R@15', 'S@15', 'T@15', 'U@15', 'V@15', 'W@15', 'Y@15', 'Z@15', 'X@15', 'A@16', 'B@16', 'C@16', 'D@16', 'E@16', 'F@16', 'G@16', 'H@16', 'I@16', 'J@16', 'K@16', 'L@16', 'M@16', 'N@16', 'O@16', 'P@16', 'Q@16', 'R@16', 'S@16', 'T@16', 'U@16', 'V@16', 'W@16', 'Y@16', 'Z@16', 'X@16', 'A@17', 'B@17', 'C@17', 'D@17', 'E@17', 'F@17', 'G@17', 'H@17', 'I@17', 'J@17', 'K@17', 'L@17', 'M@17', 'N@17', 'O@17', 'P@17', 'Q@17', 'R@17', 'S@17', 'T@17', 'U@17', 'V@17', 'W@17', 'Y@17', 'Z@17', 'X@17', 'A@18', 'B@18', 'C@18', 'D@18', 'E@18', 'F@18', 'G@18', 'H@18', 'I@18', 'J@18', 'K@18', 'L@18', 'M@18', 'N@18', 'O@18', 'P@18', 'Q@18', 'R@18', 'S@18', 'T@18', 'U@18', 'V@18', 'W@18', 'Y@18', 'Z@18', 'X@18', 'A@19', 'B@19', 'C@19', 'D@19', 'E@19', 'F@19', 'G@19', 'H@19', 'I@19', 'J@19', 'K@19', 'L@19', 'M@19', 'N@19', 'O@19', 'P@19', 'Q@19', 'R@19', 'S@19', 'T@19', 'U@19', 'V@19', 'W@19', 'Y@19', 'Z@19', 'X@19', 'A@20', 'B@20', 'C@20', 'D@20', 'E@20', 'F@20', 'G@20', 'H@20', 'I@20', 'J@20', 'K@20', 'L@20', 'M@20', 'N@20', 'O@20', 'P@20', 'Q@20', 'R@20', 'S@20', 'T@20', 'U@20', 'V@20', 'W@20', 'Y@20', 'Z@20', 'X@20']
def amino_window_to_feature_vec(amino_window):
    output = numpy.array([0]*len(basic_feature_names))
    index = -1
    for char_position, amino_in_position in enumerate(amino_window):
        if char_position == lookback_size:
            continue
        for each_amino in amnio_encoding.keys():
            index += 1
            output[index] = int(amino_in_position == each_amino)
        
    return output

def save_new_column(*, column_name, rows, path=None):
    path = path or info.absolute_path_to.atha_v10g_denovo
    df = load_atha_v10g_denovo(path)
    df[column_name] = rows
    df.to_csv(path_to.atha_v10g_denovo, sep='\t', encoding='utf-8', index=False)


def standard_load_train_test(path=path_to.all_sites):
    # 
    # load data
    # 
    original_df = pandas.read_csv(path, sep="\t")

    # 
    # filters
    # 
    df = original_df
    for each in config.modeling.filters:
        df = df[df[each]]
    
    y = df[info.config.feature_to_predict]
    x = df.drop(columns=[ each for each in df.columns if each not in config.modeling.selected_features ])
    assert len(x.columns) == len(config.selected_features), "Looks like one of the selected features isn't in the dataset"

    # 
    # test split 
    # 
    # 70% training and 30% test; stratify: maintain same proportion of + and - examples
    x = x.values
    y = y.values
    try:
        if config.modeling.stratify:
            x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=config.modeling.test_proportion, stratify=y)
        else:
            x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=config.modeling.test_proportion)
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
        print(f'''confusion_matrix(y_test, y_pred) = {stringify(to_pure(confusion_matrix(y_test, y_pred)))}''')
        return dict(total_accuracy=total_accuracy, positive_accuracy=positive_accuracy, negative_accuracy=negative_accuracy)
    
    return x_train, x_test, y_train, y_test, test_accuracy_of

def create_trainer(*, classifier, classifier_name, module_name, output_postfix=""):
    def train(x_train, x_test, y_train, y_test, test_accuracy_of):
        print(f"training {classifier_name}")
        classifier.fit(x_train, y_train)
        accuracy_info = test_accuracy_of(classifier.predict)
        return accuracy_info, classifier
    
    if module_name == '__main__':
        accuracy_info, classifier = train(*standard_load_train_test())
        pandas.DataFrame([
            accuracy_info
        ]).to_csv(f"{classifier_name}_{output_postfix}_results.tsv")
    
    return train


def bytes_to_binary(value, separator=""):
    return separator.join([f'{each:0<8b}' for each in value])
            
def nearest_neighbor_distances(base_array, neighbor_array):
    assert isinstance(base_array, numpy.ndarray)
    assert isinstance(neighbor_array, numpy.ndarray)
    
    # base_array = numpy.array([
    #     [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,],
    #     [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,],
    # ])
    # neighbor_array = numpy.array([
    #     [1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,],
    #     [0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,],
    # ])
    
    def packbits_64(array):
        array = numpy.packbits(array, axis=1)
        data_type_existing_size = 8
        data_type_target_size = 64
        rows, columns = array.shape
        bits_per_column = columns * data_type_existing_size
        padding_needed = math.ceil(bits_per_column / data_type_target_size)
        if padding_needed != 0:
            array = numpy.concatenate(
                (
                    array,
                    numpy.zeros((len(array), padding_needed), dtype='uint8')
                ),
                axis=1
            )
        rows, columns = array.shape
        bits_per_column = columns * data_type_existing_size
        new_shape = (rows, bits_per_column//data_type_target_size)
        return numpy.ndarray(
            new_shape,
            numpy.uint64,
            array.tobytes(),
        )
    
    packed_base     = packbits_64(base_array)
    packed_neighbor = packbits_64(neighbor_array)
    
    min_distances = []
    for _, each_row in ProgressBar(packed_base):
        distances = numpy.bitwise_xor(each_row, packed_neighbor)
        min_distance = numpy.unpackbits(numpy.packbits(distances, axis=1), axis=1).sum(axis=1).min()
        # min_distance = numpy.unpackbits(distances, axis=1).sum(axis=1).min()
        # min_distance = min(sum(int(each_cell).bit_count() for each_cell in each_row) for each_row in distances)
        min_distances.append(min_distance)
    
    return min_distances
        
    # for _ in notifier.progress(math.ceil(len(negative_feature_tensors)/step_size), percent_per_notify=10, minutes_per_notify=(60*12), notify_iter_delay=3):
    #     chunk = ndarray.sub(
    #         base_array[index:index+step_size][:, None]
    #     ).abs_().sum(dim=2).min(dim=1).values
    #     if type(min_distances) == type(None):
    #         min_distances = chunk
    #     else:
    #         min_distances = torch.concat((min_distances, chunk))
    #     index += step_size