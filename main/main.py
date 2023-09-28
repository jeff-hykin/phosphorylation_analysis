import sys
import os
sys.path.append(os.path.dirname(__file__))
from generic_tools.misc import pascal_case_with_spaces, no_duplicates, line_count_of
from specific_tools import *
import specific_tools

import ez_yaml

model_sources = {}
for each_name in config.selected_model_generators:
    # e.g.:
    # import modeling.neural_net             as model_neural_net
    # import modeling.random_forest          as model_random_forest
    # import modeling.random_forest_custom_1 as model_random_forest_custom_1
    # import modeling.decision_tree          as model_decision_tree
    exec(
        f"""\nif 1:
            import modeling.{each_name} as model_generator
        """,
        globals(),
        globals(),
    )
    model_sources[each_name] = model_generator

path = path_to.all_sites_with_features 

outcomes = []
experiment = "default"
with notifier.when_done:
    for progress, trial_index in notifier.progress(info.config.sample_size, title=experiment, percent_per_notify=50, minutes_per_notify=30, notify_iter_delay=2):
        x_train, x_test, y_train, y_test, test_accuracy_of = standard_load_train_test(path)
        for each_model_name, each_model in model_sources.items():
            accuracies, model = each_model.train(x_train, x_test, y_train, y_test, test_accuracy_of)
            outcomes.append(dict(model=each_model_name, **accuracies))
            df = pandas.DataFrame(outcomes)
            df.to_csv(path_to.results+f"/recent_main_{experiment}.csv")
            large_pickle_save(model, path_to.models+f"""/{experiment}_{each_model_name}_{trial_index}_{outcomes[-1]["true_positive_accuracy"]}.ignore.pickle""")
        
        summary_info = [
            dict(
                data_source=path,
                filters=info.config.modeling.filters,
                test_size=len(y_test),
                train_size=len(y_train),
            ),
        ]
        decimals = 3
        for each_model_name, each_model in model_sources.items():
            local_df = df[df['model'] == each_model_name]
            best_f1_value = max(local_df['f1_score'].values)
            best_f1_df = local_df[local_df['f1_score'] == best_f1_value]
            stdev_of_f1_score = None
            try:
                stdev_of_f1_score = to_pure(round(stdev(local_df['f1_score'].values), ndigits=decimals))
            except Exception as error:
                pass
                
            summary_info.append(dict(
                model=each_model_name,
                sample_size=len(local_df['total_accuracy']),
                stdev_of_f1_score = stdev_of_f1_score,
                average_super_f1_score                     = to_pure(round(average(local_df['super_f1_score'].values), ndigits=decimals)),
                average_f1_score                           = to_pure(round(average(local_df['f1_score'].values), ndigits=decimals)),
                average_inverse_f1_score                   = to_pure(round(average(local_df['inverse_f1_score'].values), ndigits=decimals)),
                average_total_accuracy                     = to_pure(round(average(local_df['total_accuracy'].values), ndigits=decimals)),
                average_weighted_f1_score                  = to_pure(round(average(local_df['weighted_f1_score'].values), ndigits=decimals)),
                average_weighted_basic_score               = to_pure(round(average(local_df['weighted_basic_score'].values), ndigits=decimals)),
                average_true_positive_accuracy_aka_recall  = to_pure(round(average(local_df['true_positive_accuracy'].values), ndigits=decimals)),
                average_true_negative_accuracy             = to_pure(round(average(local_df['true_negative_accuracy'].values), ndigits=decimals)),
                
                median_f1_score                            = to_pure(round(median(local_df['f1_score'].values), ndigits=decimals)),
                median_total_accuracy                      = to_pure(round(median(local_df['total_accuracy'].values), ndigits=decimals)),
                median_true_positive_accuracy              = to_pure(round(median(local_df['true_positive_accuracy'].values), ndigits=decimals)),
                median_true_negative_accuracy              = to_pure(round(median(local_df['true_negative_accuracy'].values), ndigits=decimals)),
                
                average_guessing_positive_accuracy_aka_precision  = to_pure(round(average(local_df['guessing_positive_accuracy'].values), ndigits=decimals)),
                average_guessing_negative_accuracy                = to_pure(round(average(local_df['guessing_negative_accuracy'].values), ndigits=decimals)),
                median_guessing_positive_accuracy                 = to_pure(round(median(local_df['guessing_positive_accuracy'].values), ndigits=decimals)),
                median_guessing_negative_accuracy                 = to_pure(round(median(local_df['guessing_negative_accuracy'].values), ndigits=decimals)),
                best_true_positive_accuracy_info=dict(
                    total=to_pure(round(max(best_f1_df['total_accuracy'].values), ndigits=decimals)),
                    true_positive=to_pure(round(max(best_f1_df['true_positive_accuracy'].values), ndigits=decimals)),
                    true_negative=to_pure(round(max(best_f1_df['true_negative_accuracy'].values), ndigits=decimals)),
                    guessing_positive=to_pure(round(max(best_f1_df['guessing_positive_accuracy'].values), ndigits=decimals)),
                    guessing_negative=to_pure(round(max(best_f1_df['guessing_negative_accuracy'].values), ndigits=decimals)),
                )
            ))
        
        try:
            ez_yaml.to_file(summary_info, file_path=path_to.results+f"/{experiment}_summary.yaml")
        except Exception as error:
            print("Error when saving yaml file:"+repr(error))
            
        progress.message = f"trial: {trial_index+1}\n"+code_message("\n".join([stringify(each) for each in summary_info[-len(model_sources):]]))
        