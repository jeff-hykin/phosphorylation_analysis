import math
from random import random, sample, choices, shuffle

def cross_validation(*data, number_of_folds, should_randomize=True):
    number_of_samples = len(inputs)
    fold_size = math.floor(number_of_samples / number_of_folds)
    folds = []
    
    indicies = list(range(number_of_samples))
    if should_randomize: shuffle(indicies)
    
    for index in range(number_of_folds):
        start = index * fold_size
        end = number_of_samples if index == number_of_folds - 1 else (index + 1) * fold_size
        train_indices = []
        test_indices = []
        
        copy_of_indicies = list(indicies)
        
        for j in range(number_of_samples):
            if j >= start and j < end:
                test_indices.append(copy_of_indicies.pop())
            else:
                train_indices.append(copy_of_indicies.pop())
        
        # 
        # uses iterators to avoid memory usage and up-front computation
        # 
        folds.append({
            "train": tuple(
                tuple(each_source[each_index] for each_index in train_indices)
                    for each_source in data
            ),
            "test": tuple(
                tuple(each_source[each_index] for each_index in test_indices)
                    for each_source in data
            ),
        })

    return folds