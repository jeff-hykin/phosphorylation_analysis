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

FS.ensure_is_file(path_to.all_sites)
first_line = ""
with open(path_to.all_sites, "r+") as file:
    for line in file:
        first_line = line.strip()
        break

new_filepath = path_to.all_sites+".new"
FS.ensure_is_file(new_filepath)
with open(new_filepath, "r+") as file:
    file.write(first_line + ("\t".join(basic_feature_names))+"\n")
    for progress, (site_id, uniprot_gene_id, index_relative_to_gene, amino_acids, is_serine_site, is_threonine_site, is_tyrosine_site, is_human, is_phos_site, *_) in ProgressBar(df.values):
        values = [
            # converts NaN's to empty strings
            str(each) if each == each else ""
                for each in ([ site_id, uniprot_gene_id, index_relative_to_gene, amino_acids, is_serine_site, is_threonine_site, is_tyrosine_site, is_human, ] + specific_tools.amino_window_to_feature_vec(amino_acids).tolist())
        ]
        file.write("\t".join(values)+"\n")