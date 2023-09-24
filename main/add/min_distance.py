import sys
import os
sys.path.append(os.path.dirname(__file__))
from generic_tools.misc import *
from specific_tools import *
import specific_tools
import torch

from __dependencies__.trivial_torch_tools import to_tensor, layer_output_shapes, Sequential, core

data = dict()


# 
# 
# NOTE: this script is either fully automated or about 4x faster if run on different segments in parallel
#       (assuming the PC has a bunch of ram to run them in parallel)
#       running in parallel requires using the commented out code. Sorry its not documented better
# 
# 

with notifier.when_done:
    # 
    # read data
    # 
    path = path_to.all_sites
    path = "../data/all_sites_with_features.ignore.tsv"
    print(f'''reading {path}''')
    df = pandas.read_csv(path, sep="\t")
    
    # start = config.min_distances.start
    # stop = config.min_distances.stop 
    start = 0
    stop = len(df)
    
    # 
    # create data
    #
    try:
        df['min_distance_to_human_phos'] = tuple([0])*len(df['is_phos_site'])
        print(f'''creating positive_feature_tensors''')
        positive_feature_tensors = df[(df.is_phos_site == 1) * (df.is_human==1)][basic_feature_names].values
        print(f'''creating negative_feature_tensors''')
        negative_feature_tensors = df[(df.is_phos_site != 1) * (df.is_human==1)][basic_feature_names].values[start:stop]
        
        from sklearn.neighbors import NearestNeighbors
        obj = NearestNeighbors(
            n_neighbors=1,
            algorithm='auto',
            leaf_size=30,
            p=1,
            metric='minkowski',
            metric_params=None,
            n_jobs=None,
        )
        obj.fit(positive_feature_tensors)
        min_distances, indicies = obj.kneighbors(negative_feature_tensors)
        # min_distances = numpy.array(specific_tools.nearest_neighbor_distances(base_array=negative_feature_tensors, neighbor_array=positive_feature_tensors))
    except Exception as error:
        print("issue with main operation")
        import code; code.interact(local={**globals(),**locals()})
        
        # large_pickle_save(min_distances, file_path=f"./min_distances_{start}_{stop}.pickle")
        
        # min_distances = numpy.concatenate(
        #     (
        #         numpy.array(large_pickle_load(f"{path_to.data}/min_distances_0_1292061.ignore.pickle")),
        #         numpy.array(large_pickle_load(f"{path_to.data}/min_distances_1292061_1722749.ignore.pickle")),
        #     )
        # )
    
    # 
    # save data
    # 
    try:
        print(f'''assigning data''')
        df.loc[1-df.is_human, 'min_distance_to_human_phos'] = float('NaN')
        df.loc[(df.is_phos_site == 1) * (df.is_human==1), 'min_distance_to_human_phos'] = 0
        df.loc[(df.is_phos_site != 1) * (df.is_human==1), 'min_distance_to_human_phos'] = min_distances
        df.loc[1-df.is_human, 'min_distance_index_to_human_phos'] = float('NaN')
        df.loc[(df.is_phos_site == 1) * (df.is_human==1), 'min_distance_index_to_human_phos'] = 0
        df.loc[(df.is_phos_site != 1) * (df.is_human==1), 'min_distance_index_to_human_phos'] = indicies
    except Exception as error:
        print(f'''error assigning min_distance vals to df''')
        import code; code.interact(local={**globals(),**locals()})

        
    # 
    # save new column
    # 
    try:
        print(f'''writing data''')
        save_with_snippet(df, path+".with_min.tsv")
    except Exception as error:
        print(f'''error saving min_distance vals to file''')
        import code; code.interact(local={**globals(),**locals()})