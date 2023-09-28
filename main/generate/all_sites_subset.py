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
path = "../data/all_sites_with_features.ignore.tsv"
print(f'''reading {path}''')
df = pandas.read_csv(path, sep="\t")

try:
    df = pandas.concat(
        [
            df[df.is_phos_site == 1][0:25_000],
            df[df.is_phos_site == 0][0:25_000],
        ],
        axis=0
    )
    df.to_csv("../data/all_sites_with_features.subset.ignore.tsv", sep='\t', encoding='utf-8', index=False)
except Exception as error:
    import code; code.interact(local={**globals(),**locals()})