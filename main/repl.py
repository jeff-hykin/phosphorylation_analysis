import sys
import os
sys.path.append(os.path.dirname(__file__))
# from generic_tools.misc import *
from specific_tools import *
import specific_tools
import plotly.express as px
import plotly.graph_objects as go
import numpy as np



from collections import Counter
# path = "data/sp_sites.tsv"
df = pandas.read_csv(path_to.all_sites_with_features, sep="\t")
print(Counter(df.is_phos_site.values))


# path = path_to.all_sites_with_features
# df = pandas.read_csv(path, sep="\t")
# set(df['is_phos_site'].values)
# df['is_phos_site'].values.sum() # 1614988 of 1615055, which means that difference is the ones that are missing data
# for has_identifiers, id_kind, id_accession, id_name, id_integer, id_sequence_number, id_application_number, id_database, id_country, id_locus, id_entry, id_chain, id_patent, id_string, amino_acids_string, comment in df.values:
#     pass