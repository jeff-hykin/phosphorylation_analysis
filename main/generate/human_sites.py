import sys
import os
sys.path.append(os.path.dirname(__file__))
from generic_tools.misc import *
from specific_tools import *
import specific_tools

# 
# read data
# 
path = path_to.human_genes
df = pandas.read_csv(path, sep="\t")

# 
# create data
#
match_patterns = [ "S", "T", "Y" ]
lookback_size = info.config.phos_model.lookback_size # ex: 10
for progress, amino_acid_sequence in ProgressBar(df['amino_acids_string']):
    index = progress.index
    feature_vecs = []
    for each_window in specific_tools.amino_sliding_window(amino_acid_sequence, lookback_size):
        if each_window[lookback_size] in match_patterns:
            feature_vec = specific_tools.amino_window_to_feature_vec(each_window)
            
            
column = 'pubmed_id_for_related_references'
new_values = [0]*len(df[column])
for index, each in enumerate(df[column].values):
    new_values[index] = len(each.split(" "))
df['citation_count'] = new_values

# 
# save new column
# 
df.to_csv(path, sep='\t', encoding='utf-8', index=False)