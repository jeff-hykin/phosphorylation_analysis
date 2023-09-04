import sys
import os
sys.path.append(os.path.dirname(__file__))
from generic_tools.misc import *
from specific_tools import *
import specific_tools

# 
# read data
# 
path = path_to.all_sites
df = pandas.read_csv(path, sep="\t")

# 
# create data
# 
df = pandas.concat(
    [
        df,
        pandas.DataFrame(
            numpy.stack(
                tuple(
                    each
                        for progess, each in ProgressBar(
                            (specific_tools.amino_window_to_feature_vec(each_window) for each_window in df['amino_acids'].values),
                            iterations=len(df['amino_acids'].values)
                        )
                )
            ), 
            index=df.index, 
            columns=basic_feature_names
        )
    ],
    axis=1,
)

# 
# save new column
# 
df.to_csv(path+".new", sep='\t', encoding='utf-8', index=False)