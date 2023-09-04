import sys
import os
sys.path.append(os.path.dirname(__file__))
from generic_tools.misc import *
from specific_tools import *
import specific_tools
import plotly.express as px
import plotly.graph_objects as go
import numpy as np


path = path_to.human_genes
df = pandas.read_csv(path, sep="\t")
for has_identifiers, id_kind, id_accession, id_name, id_integer, id_sequence_number, id_application_number, id_database, id_country, id_locus, id_entry, id_chain, id_patent, id_string, amino_acids_string, comment in df.values:
    pass