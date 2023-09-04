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
lookback_size = info.config.lookback_size # ex: 10
FS.ensure_is_file(path_to.human_sites)
with open(path_to.human_sites, "r+") as file:
    columns = [
        'site_id',
        'uniprot_gene_id',
        'index_relative_to_gene',
        'amino_acids',
        'is_serine_site',
        'is_threonine_site',
        'is_tyrosine_site',
        'is_human',
        'is_phos_site',
    ]
    file.write("\t".join(columns)+"\n")
    for progress, (has_identifiers, id_kind, id_accession, id_name, id_integer, id_sequence_number, id_application_number, id_database, id_country, id_locus, id_entry, id_chain, id_patent, id_string, amino_acids_string, comment) in ProgressBar(df.values):
        index = progress.index
        gene_name       = id_name
        uniprot_gene_id = id_accession
        
        for index_relative_to_gene, each_window in enumerate(specific_tools.amino_sliding_window(amino_acids_string, lookback_size)):
            if each_window[lookback_size] in match_patterns:
                index_relative_to_gene = str(index_relative_to_gene)
                site_id                = f"{uniprot_gene_id}|{index_relative_to_gene}"
                amino_acids            = each_window
                is_serine_site         = "1" if each_window[lookback_size] == "S" else "0"
                is_threonine_site      = "1" if each_window[lookback_size] == "T" else "0"
                is_tyrosine_site       = "1" if each_window[lookback_size] == "Y" else "0"
                is_human               = "1"
                is_phos_site           = "?"
                file.write(("\t".join([
                    site_id,
                    uniprot_gene_id,
                    index_relative_to_gene,
                    amino_acids,
                    is_serine_site,
                    is_threonine_site,
                    is_tyrosine_site,
                    is_human,
                    is_phos_site,
                ]))+"\n")