import math
from random import random, sample, choices, shuffle

# Perform cross-validation by partitioning the data into all possible combinations.
# 
# @example
#     number_of_folds = cross_validation({
#         inputs: [
#             [1, 2],
#             [2, 3],
#             [3, 4],
#             [4, 5],
#             [5, 6],
#         ],
#         outputs: [0, 0, 1, 1, 1],
#         number_of_folds: 3,
#     })
#     console.log(foldIndices)
#     # the "inputs" and "outputs" below 
#     # are generators rather than arrays
#     [
#       {
#         train: { inputs: [...], outputs: [...] },
#         test:  { inputs: [...], outputs: [...] },
#       },
#       {
#         train: { inputs: [...], outputs: [...] },
#         test:  { inputs: [...], outputs: [...] },
#       },
#       {
#         train: { inputs: [...], outputs: [...] },
#         test:  { inputs: [...], outputs: [...] },
#       }
#     ]
# @param {Array<Array>} inputs - The samples [0]= first sample input
# @param {Array} outputs 
# @param {number} number_of_folds - The number of number_of_folds for cross-validation.
# @returns {Array<Object>} An array of fold objects containing train and test data indices.
def cross_validation(inputs, outputs, number_of_folds, should_randomize=True):
    number_of_samples = len(inputs)
    fold_size = math.floor(number_of_samples / number_of_folds)
    folds = []
    
    indicies = shuffle(list(range(number_of_samples))) if should_randomize else list(range(number_of_samples))
    
    for index in range(number_of_folds):
        start = index * fold_size
        end = number_of_samples if index == number_of_folds - 1 else (index + 1) * fold_size
        train_indices = []
        test_indices = []
        
        for j in range(number_of_samples):
            if j >= start and j < end:
                test_indices.push(indicies.pop())
            else:
                train_indices.push(indicies.pop())
        
        def train_inputs_generator():
            for each in train_indices:
                yield inputs[each]
        
        # 
        # uses iterators to avoid memory usage and up-front computation
        # 
        folds.push({
            "train": {
                inputs: (inputs[each] for each in train_indices),
                outputs: (outputs[each] for each in train_indices),
            },
            "test": {
                inputs: (inputs[each] for each in test_indices),
                outputs: (outputs[each] for each in test_indices),
            },
        })

    return folds