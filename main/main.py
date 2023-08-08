import json
from os.path import join
from random import shuffle
import math
from random import random, sample, choices, shuffle
import pandas
import torch

from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix
from sklearn.svm import SVC
from sklearn.neural_network import MLPClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification
import pandas as pd
import matplotlib.pyplot as plt
import numpy

from __dependencies__.quik_config import find_and_load
from __dependencies__.informative_iterator import ProgressBar
from __dependencies__.cool_cache import cache, super_hash
from __dependencies__.blissful_basics import Csv, FS, product, large_pickle_save, large_pickle_load, to_pure, print, LazyDict, super_hash, drop_end, linear_steps, arg_max
from __dependencies__.trivial_torch_tools import to_tensor, layer_output_shapes, Sequential, core
from generic_tools.cross_validation import cross_validation


info = find_and_load(
    "config.yaml", # walks up folders until it finds a file with this name
    cd_to_filepath=True, # helpful if using relative paths
    fully_parse_args=True, # if you already have argparse, use parse_args=True instead
    show_help_for_no_args=False, # change if you want
)

positive_label = info.config.positive_label
negative_label = info.config.negative_label

import json
def json_write(path, data):
    with open(path, 'w') as outfile:
        json.dump(data, outfile)
    
@cache()
def read_full_basic_data():
    # 
    # read data
    # 
    with open(info.absolute_path_to.all_negative_examples, 'r') as in_file:
        negative_inputs = json.load(in_file)
        negative_outputs = tuple(negative_label for each in negative_inputs)
        print("loaded all_negative_examples")
    with open(info.absolute_path_to.all_positive_examples, 'r') as in_file:
        positive_inputs = json.load(in_file)
        positive_outputs = tuple(positive_label for each in positive_inputs)
        print("loaded all_positive_examples")
    with open(info.absolute_path_to.all_negative_examples_genes, 'r') as in_file:
        negative_genes = json.load(in_file)
        print("loaded all_negative_examples_genes")
    with open(info.absolute_path_to.all_positive_examples_genes, 'r') as in_file:
        positive_genes = json.load(in_file)
        print("loaded all_positive_examples_genes")
    
    return negative_inputs, negative_outputs, positive_inputs, positive_outputs, negative_genes, positive_genes
    

@cache()
def read_full_data():
    negative_inputs, negative_outputs, positive_inputs, positive_outputs, negative_genes, positive_genes = read_full_basic_data()

    X     = negative_inputs + positive_inputs
    y     = negative_outputs + positive_outputs
    genes = negative_genes + positive_genes

    sample_size = len(X)
    print(f'''len(y) = {len(y)}''')
    print(f'''sum(y) = {sum(y)}''')

    return X, y, genes, sample_size

@cache(watch_filepaths=lambda *args: [ info.absolute_path_to.negative_examples, info.absolute_path_to.positive_examples ])
def read_basic_data():
    # 
    # read data
    # 
    with open(info.absolute_path_to.negative_examples, 'r') as in_file:
        negative_inputs = json.load(in_file)
        negative_outputs = tuple(negative_label for each in negative_inputs)
        print("loaded negative_examples")
    with open(info.absolute_path_to.positive_examples, 'r') as in_file:
        positive_inputs = json.load(in_file)
        positive_outputs = tuple(positive_label for each in positive_inputs)
        print("loaded positive_examples")
    with open(info.absolute_path_to.negative_examples_genes, 'r') as in_file:
        negative_genes = json.load(in_file)
        print("loaded negative_examples_genes")
    with open(info.absolute_path_to.positive_examples_genes, 'r') as in_file:
        positive_genes = json.load(in_file)
        print("loaded positive_examples_genes")
    
    return negative_inputs, negative_outputs, positive_inputs, positive_outputs, negative_genes, positive_genes
    
    
@cache(watch_filepaths=lambda *args: [ info.absolute_path_to.negative_examples, info.absolute_path_to.positive_examples ], depends_on=lambda *args: [ info.config.classifier_truncate_sample ])
def read_data():
    negative_inputs, negative_outputs, positive_inputs, positive_outputs, negative_genes, positive_genes = read_basic_data()

    truncate_size = info.config.classifier_truncate_sample
    X     = negative_inputs[0:truncate_size] + positive_inputs[0:truncate_size]
    y     = negative_outputs[0:truncate_size] + positive_outputs[0:truncate_size]
    genes = negative_genes[0:truncate_size] + positive_genes[0:truncate_size]

    sample_size = len(X)
    print(f'''len(y) = {len(y)}''')
    print(f'''sum(y) = {sum(y)}''')

    # Assuming you have your data and labels ready, let's call them X and y respectively
    # Split the data into training and testing sets
    return X, y, genes, sample_size

@cache(watch_filepaths=lambda *args: [ info.absolute_path_to.negative_examples, info.absolute_path_to.positive_examples ], depends_on=lambda *args: [ info.config.classifier_truncate_sample, info.config.negative_example_too_similar_threshold ])
def read_filtered_data():
    print("read_full_basic_data")
    # positives must come from the full dataset
    _, _, positive_inputs, _, _, _ = read_full_basic_data()
    positive_feature_tensors = torch.tensor(positive_inputs).to(core.default_device)
    print("read_full_basic_data: done")
    
    # negatives can come from local dataset
    print("read_basic_data")
    negative_inputs, negative_outputs, positive_inputs, positive_outputs, negative_genes, positive_genes = read_basic_data()
    negative_feature_tensors = torch.tensor(negative_inputs).to(core.default_device)
    print("read_basic_data: done")
    
    # multiplied by 2 because if one boolean feature is different, then another is necessairly different (one-hot encoding)
    similarity_threshold = 2 * info.config.negative_example_too_similar_threshold
    
    print("filtering simlarity")
    negative_inputs = []
    new_negative_genes = []
    for progress, (each_negative_tensor, negative_gene) in ProgressBar(tuple(zip(negative_feature_tensors, negative_genes))):
        values, indicies = (positive_feature_tensors - each_negative_tensor).abs().sum(dim=1).sort()
        # skip those above the threshold
        if torch.any(values > similarity_threshold):
            continue
        negative_inputs.append(each_negative_tensor)
        new_negative_genes.append(negative_gene)
    print("filtering simlarity: done")
    
    negative_genes = new_negative_genes
    
    X     = negative_inputs[0:truncate_size] + positive_inputs[0:truncate_size]
    y     = negative_outputs[0:truncate_size] + positive_outputs[0:truncate_size]
    genes = negative_genes[0:truncate_size] + positive_genes[0:truncate_size]
    
    return X, y, genes, sample_size

FS.ensure_is_folder(info.absolute_path_to.results_folder)

def train_and_test(X_train, y_train, genes_train, X_test, y_test, genes_test):
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
        positive_accuracy = accuracy_score(positive_test_outputs, predict(positive_test_inputs))
        print("Positive Accuracy:", positive_accuracy)
        
        negative_test_inputs  = tuple(each_input   for each_input, each_output in zip(X_test, y_test) if each_output == -1)
        negative_test_outputs = tuple(each_output  for each_input, each_output in zip(X_test, y_test) if each_output == -1)
        negative_accuracy = accuracy_score(negative_test_outputs, predict(negative_test_inputs))
        print("Negative Accuracy:", negative_accuracy)
        
        gene_info_for = {}
        all_x, all_y, all_genes, sample_size = read_full_data()
        print("predicting")
        all_predictions = predict(all_x)
        print("evaluating gene accuracy...")
        for progress, (each_input, each_output, each_guess, gene) in ProgressBar(zip(all_x, all_y, all_predictions, all_genes), iterations=len(all_x)):
            gene_info_for.setdefault(gene, LazyDict())
            gene_info =  gene_info_for[gene]
            
            gene_info.setdefault("entry_count", 0)
            gene_info.setdefault("positive_count", 0)
            gene_info.setdefault("negative_count", 0)
            gene_info.setdefault("correctly_guessed", 0)
            gene_info.setdefault("positive_guess_count", 0)
            gene_info.setdefault("negative_guess_count", 0)
            
            # entry_count
            gene_info.entry_count += 1
            # positive_count
            if each_output == positive_label:
                gene_info.positive_count += 1
            # negative_count
            else:
                gene_info.negative_count += 1
            # correctly_guessed
            if each_output == each_guess:
                gene_info.correctly_guessed += 1
            # positive_guess_count
            if each_guess == positive_label:
                gene_info.positive_guess_count += 1
            # negative_guess_count
            if each_guess == negative_label:
                gene_info.negative_guess_count += 1
        
        total_count = 0
        correct_count = 0
        for gene_id, each_gene_info in gene_info_for.items():
            gene_is_considered_phos  = each_gene_info.positive_count >= info.config.gene_classification_threshold
            gene_was_guessed_as_phos = each_gene_info.positive_guess_count >= info.config.gene_classification_threshold
            total_count += 1
            if gene_is_considered_phos == gene_was_guessed_as_phos:
                correct_count += 1
        gene_accuracy = correct_count / total_count
        print(f'''Gene_accuracy = {gene_accuracy}''')
        
        return accuracy, positive_accuracy, negative_accuracy, gene_info_for, gene_accuracy

    
    training_data_hash = super_hash((X_train, y_train, X_test, y_test))
    # 
    # naive_bayes_classifier
    # 
    if 0:
        # positive_truncate = 10_000
        # X = negative_inputs + positive_inputs[0:positive_truncate]
        # y = negative_outputs + positive_outputs[0:positive_truncate]

        # print(f'''len(y) = {len(y)}''')
        # print(f'''sum(y) = {sum(y)}''')

        # # Assuming you have your data and labels ready, let's call them X and y respectively
        # # Split the data into training and testing sets
        # print("splitting up the data")
        # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Create a Random Forest Classifier object
        naive_bayes_classifier = GaussianNB(priors=[0.5, 0.5])

        # Train the naive_bayes_classifier using the training data
        print("training naive_bayes")
        naive_bayes_classifier.fit(X_train, y_train)

        print("naive_bayes_predictions")
        test_accuracy_of(naive_bayes_classifier.predict)
        print("\n\n")

    # 
    # SVM
    # 
    if 0:
        # Create a Random Forest Classifier object
        svm_classifier = SVC()

        # Train the svm_classifier using the training data
        print("training svm")
        svm_classifier.fit(X_train, y_train)

        print("svm_predictions")
        test_accuracy_of(svm_classifier.predict)
        print("\n\n")
    
    # 
    # random_forest
    # 
    if True:
        @cache(depends_on=lambda *args: [ training_data_hash ])
        def train_random_forest(n_estimators, max_depth):
            # Create a Random Forest Classifier object
            rf_classifier = RandomForestClassifier(n_estimators=n_estimators,max_depth=max_depth)

            # Train the classifier using the training data
            print("training random_forest")
            rf_classifier.fit(X_train, y_train)
            return rf_classifier
        
        rf_classifier = train_random_forest(500, 20)
        
        print("random_forest_predictions")
        random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy, random_forest_gene_info, random_forest_gene_accuracy = test_accuracy_of(rf_classifier.predict)
        pandas.DataFrame.from_dict(random_forest_gene_info, orient='index').to_csv(f"{info.absolute_path_to.results_folder}/gene_accuracy_for_random_forest.csv")
        print("\n\n")
        
        importances = rf_classifier.feature_importances_
        feature_names = [ str(index) for index in range(len(X[0]))]
        forest_importances = pd.Series(importances, index=feature_names)
        
        fig, ax = plt.subplots()
        std = numpy.std([tree.feature_importances_ for tree in rf_classifier.estimators_], axis=0)
        forest_importances.plot.bar(yerr=std, ax=ax)
        ax.set_title("Feature importances using MDI")
        ax.set_ylabel("Mean decrease in impurity")
        fig.tight_layout()
        FS.ensure_is_folder(FS.dirname(info.absolute_path_to.important_features_image))
        fig.set_size_inches(256, 140)  # Adjust the figure size as desired
        plt.savefig(info.absolute_path_to.important_features_image, dpi=200)
    
    # 
    # Neural
    # 
    if True:
        @cache(depends_on=lambda *args: [ training_data_hash ])
        def train_mlp():
            # Create a Random Forest Classifier object
            mlp_classifier = MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=1000)

            # Train the svm_classifier using the training data
            print("training mlp_classifier")
            mlp_classifier.fit(X_train, y_train)
            return mlp_classifier
        
        mlp_classifier = train_mlp()
        
        print("mlp_classifier_predictions")
        neural_accuracy, neural_positive_accuracy, neural_negative_accuracy, neural_gene_info, neural_gene_accuracy = test_accuracy_of(mlp_classifier.predict)
        pandas.DataFrame.from_dict(neural_gene_info, orient='index').to_csv(f"{info.absolute_path_to.results_folder}/gene_accuracy_for_neural.csv")
        print("\n\n")
    # 
    # DecisionTreeClassifier
    # 
    if 0:
        # Create a Random Forest Classifier object
        tree_classifier = DecisionTreeClassifier()

        # Train the svm_classifier using the training data
        print("training tree_classifier")
        tree_classifier.fit(X_train, y_train)

        print("tree_classifier_predictions")
        tree_accuracy, tree_positive_accuracy, tree_negative_accuracy, tree_gene_info, tree_gene_accuracy = test_accuracy_of(tree_classifier.predict)
        pandas.DataFrame.from_dict(tree_gene_info, orient='index').to_csv(f"{info.absolute_path_to.results_folder}/gene_accuracy_for_tree.csv")
        print("\n\n")

    # 
    # Auto Neural
    # 
    if 0:
        # maybe use a transformer like https://www.nature.com/articles/s41592-021-01252-x
        pass
        # create an autoencoder for sequences near phos sites
        # use prev 3 amino acids to predict next amino acid

    # 
    # combined
    # 

    def predict(X):
        rf_predictions = rf_classifier.predict_proba(X)
        mlp_predictions = mlp_classifier.predict_proba(X)
        predictions = [0]*len(rf_predictions)
        for index, probs in enumerate(zip( rf_predictions, mlp_predictions )):
            combined_probabilites = [ sum(each)/2.0 for each in zip(*probs)]
            best_label = None
            max_probability = -1
            for label_index, probability in enumerate(combined_probabilites):
                if probability > max_probability:
                    max_probability = probability
                    best_label = label_index
                    
            predictions[index] = best_label
                
        return predictions
    
    average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy, average_ensemble_gene_info, average_ensemble_gene_accuracy = test_accuracy_of(predict)
    pandas.DataFrame.from_dict(average_ensemble_gene_info, orient='index').to_csv(f"{info.absolute_path_to.results_folder}/gene_accuracy_for_average_ensemble.csv")
    
    negative_shift_amount = 0.1
    def predict(X):
        rf_predictions = rf_classifier.predict_proba(X)
        mlp_predictions = mlp_classifier.predict_proba(X)
        predictions = [0]*len(rf_predictions)
        for index, ((rf_prediction_probability_negative_case, rf_prediction_probability_positive_case), (mlp_prediction_probability_negative_case, mlp_prediction_probability_positive_case)) in enumerate(zip( rf_predictions, mlp_predictions )):
            rf_prediction_probability_negative_case += negative_shift_amount
            mlp_prediction_probability_negative_case += negative_shift_amount
            mlp_predicts_negative = mlp_prediction_probability_negative_case > mlp_prediction_probability_positive_case
            rf_predicts_negative = rf_prediction_probability_negative_case > rf_prediction_probability_positive_case
            if mlp_predicts_negative: # negative prediction
                if rf_predicts_negative:
                    predictions[index] = negative_label
                else:
                    predictions[index] = positive_label
            else:
                predictions[index] = positive_label
                
        return predictions
    
    nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy, nn_0_fallback_gene_info, nn_0_fallback_gene_accuracy = test_accuracy_of(predict)
    pandas.DataFrame.from_dict(nn_0_fallback_gene_info, orient='index').to_csv(f"{info.absolute_path_to.results_folder}/gene_accuracy_for_nn_0_fallback.csv")
    
    def predict(X):
        rf_predictions = rf_classifier.predict(X)
        mlp_predictions = mlp_classifier.predict(X)
        predictions = [0]*len(rf_predictions)
        for index, (rf_prediction, mlp_prediction) in enumerate(zip( rf_predictions, mlp_predictions )):
            if mlp_prediction == 1: # negative prediction
                predictions[index] = rf_prediction
            else:
                predictions[index] = mlp_prediction
                
        return predictions

    nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy, nn_1_fallback_gene_info, nn_1_fallback_gene_accuracy = test_accuracy_of(predict)
    pandas.DataFrame.from_dict(nn_1_fallback_gene_info, orient='index').to_csv(f"{info.absolute_path_to.results_folder}/gene_accuracy_for_nn_1_fallback.csv")
    
    return (
        neural_accuracy, neural_positive_accuracy, neural_negative_accuracy, neural_gene_accuracy,
        random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy, random_forest_gene_accuracy,
        average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy, average_ensemble_gene_accuracy,
        tree_accuracy, tree_positive_accuracy, tree_negative_accuracy, tree_gene_accuracy,
        nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy, nn_0_fallback_gene_accuracy,
        nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy, nn_1_fallback_gene_accuracy,
    )

if __name__ == '__main__':
    X, y, genes, sample_size = read_filtered_data()

    number_of_folds = 4
    folds = cross_validation(
        X,
        y,
        genes,
        number_of_folds=number_of_folds,
    )

    rows_of_output = []
    for progress, each in ProgressBar(folds):
        index = progress.index
        X_train, y_train, genes_train = each["train"]
        X_test, y_test, genes_test = each["test"]
        (
            neural_accuracy, neural_positive_accuracy, neural_negative_accuracy, neural_gene_accuracy,
            random_forest_accuracy, random_forest_positive_accuracy, random_forest_negative_accuracy, random_forest_gene_accuracy,
            average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy, average_ensemble_gene_accuracy,
            tree_accuracy, tree_positive_accuracy, tree_negative_accuracy, tree_gene_accuracy,
            nn_0_fallback_accuracy, nn_0_fallback_positive_accuracy, nn_0_fallback_negative_accuracy, nn_0_fallback_gene_accuracy,
            nn_1_fallback_accuracy, nn_1_fallback_positive_accuracy, nn_1_fallback_negative_accuracy, nn_1_fallback_gene_accuracy,
        ) = train_and_test(
            X_train=X_train,
            y_train=y_train,
            genes_train=genes_train,
            X_test=X_test,
            y_test=y_test,
            genes_test=genes_test,
        )
        
        rows_of_output.append([sample_size, info.config.feature_set, "neural",           index+1, neural_accuracy          , neural_positive_accuracy          , neural_negative_accuracy          , neural_gene_accuracy           ,])
        rows_of_output.append([sample_size, info.config.feature_set, "random_forest",    index+1, random_forest_accuracy   , random_forest_positive_accuracy   , random_forest_negative_accuracy   , random_forest_gene_accuracy    ,])
        rows_of_output.append([sample_size, info.config.feature_set, "tree",             index+1, tree_accuracy            , tree_positive_accuracy            , tree_negative_accuracy            , tree_gene_accuracy             ,])
        rows_of_output.append([sample_size, info.config.feature_set, "average_ensemble", index+1, average_ensemble_accuracy, average_ensemble_positive_accuracy, average_ensemble_negative_accuracy, average_ensemble_gene_accuracy ,])
        rows_of_output.append([sample_size, info.config.feature_set, "nn_0_fallback",    index+1, nn_0_fallback_accuracy   , nn_0_fallback_positive_accuracy   , nn_0_fallback_negative_accuracy   , nn_0_fallback_gene_accuracy    ,])
        rows_of_output.append([sample_size, info.config.feature_set, "nn_1_fallback",    index+1, nn_1_fallback_accuracy   , nn_1_fallback_positive_accuracy   , nn_1_fallback_negative_accuracy   , nn_1_fallback_gene_accuracy    ,])
        
        Csv.write(
            path=info.path_to.recent_results,
            rows=rows_of_output,
            column_names=[ "sample_size", "feature_set", "model", "fold_number", "accuracy", "positive_accuracy", "negative_accuracy", "gene_accuracy",],
        )

    # 200,000 raw features
        # Total Accuracy: 0.6795935855061819
        # confusion_matrix(y_test, y_pred) = [
        #     [13568  6779]
        #     [ 6308 14190]
        # ]
        # Positive Accuracy: 0.692262659771685
        # Negative Accuracy: 0.6668304909814715

