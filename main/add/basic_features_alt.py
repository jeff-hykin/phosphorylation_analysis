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
df = pandas.read_csv("/Users/jeffhykin/repos/phosphorylation_analysis/data/dbPTM.ignore/all_sites_ioerger.tsv", sep="\t")


new_filepath = f"{path_to.data}/all_sites_with_features.ioerger.ignore.tsv"
FS.ensure_is_file(new_filepath)
with open(new_filepath, "r+") as file:
    file.write("site_id	uniprot_gene_id	index_relative_to_gene	amino_acids	is_phos_site	is_serine_site	is_threonine_site	is_tyrosine_site	is_human" + "\t" + ("\t".join(basic_feature_names))+"\n")
    for progress, (site_id, uniprot_gene_id, index_relative_to_gene, amino_acids, is_phos_site, *_) in ProgressBar(df.values):
        try:
            values = [
                # converts NaN's to empty strings
                str(each) if each == each else ""
                    for each in ([ site_id, uniprot_gene_id, index_relative_to_gene, amino_acids, is_phos_site, 1, 0, 0, 1 ] + specific_tools.amino_window_to_feature_vec(amino_acids).tolist())
            ]
            file.write("\t".join(values)+"\n")
        except Exception as error:
            print(f'''line: {progress.index}, error = {error}''')