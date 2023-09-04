import sys
import os
sys.path.append(os.path.dirname(__file__))
from generic_tools.misc import *
from specific_tools import *
import specific_tools
import torch

# 
# read data
# 
path = path_to.all_sites
print(f'''reading {path}''')
df = pandas.read_csv(path, sep="\t")

# 
# create data
#
df['min_distance_to_phos'] = tuple([0])*len(df['is_phos_site'])
print(f'''creating positive_feature_tensors''')
positive_feature_tensors = torch.tensor(
    df[df['is_phos_site'] == 1][basic_feature_names].values
)
print(f'''creating negative_feature_tensors''')
negative_feature_tensors = torch.tensor(
    df[df['is_phos_site'] != 1][basic_feature_names].values
)

min_distances = [0]*len(negative_inputs)
for progress, each_negative_tensor in ProgressBar(negative_feature_tensors):
    min_distances[progress.index] = (positive_feature_tensors - each_negative_tensor).abs().sum(dim=1).min().item()

try:
    print(f'''assigning data''')
    df.loc[df.is_phos_site != 1, 'min_distance_to_phos'] = min_distances
except Exception as error:
    print(f'''error assigning min_distance vals to df''')
    import code; code.interact(local={**globals(),**locals()})


    
# 
# save new column
# 
try:
    print(f'''writing data''')
    df.to_csv(path+".new", sep='\t', encoding='utf-8', index=False)
except Exception as error:
    print(f'''error saving min_distance vals to file''')
    import code; code.interact(local={**globals(),**locals()})