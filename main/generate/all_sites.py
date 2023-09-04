import sys
import os
sys.path.append(os.path.dirname(__file__))
from generic_tools.misc import *
from specific_tools import *
import specific_tools

# 
# read data
#
if not FS.is_file(path_to.human_sites):
    print(f'''human_sites missing; generating now''')
    import subprocess
    stdout = subprocess.check_output(['python3', FS.local_path("human_sites.py")]).decode('utf-8')[0:-1]
    
human_df = pandas.read_csv(path_to.human_sites, sep="\t")
lookback_size = info.config.phos_model.lookback_size # ex: 10


# convert to dict
sites = {}
for site_id, uniprot_gene_id, index_relative_to_gene, amino_acids, is_serine_site, is_threonine_site, is_tyrosine_site, is_human, is_phos_site in human_df.values:
    sites[site_id] = [ site_id, uniprot_gene_id, index_relative_to_gene, amino_acids, is_serine_site, is_threonine_site, is_tyrosine_site, is_human, is_phos_site ]

phos_df = pandas.read_csv(path_to.phos, sep="\t")
FS.ensure_is_file(path_to.all_sites)
with open(path_to.all_sites, "r+") as file:
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
    for progess, (abbreviated_gene_species, uniprot_gene_id, index_relative_to_gene, type_of_site, pubmed_id_for_related_references, amino_acids_string) in ProgressBar(phos_df.values):
        site_id = f"{uniprot_gene_id}|{index_relative_to_gene}"
        existing_data = sites.get(site_id, None)
        if existing_data:
            site_id, uniprot_gene_id, index_relative_to_gene, amino_acids, is_serine_site, is_threonine_site, is_tyrosine_site, is_human, is_phos_site = existing_data
            del sites[site_id]
        else:
            # some entries are just missing data
            if type(amino_acids_string) != str:
                continue
            
            site_id                = f"{uniprot_gene_id}|{index_relative_to_gene}"
            uniprot_gene_id        = uniprot_gene_id
            index_relative_to_gene = index_relative_to_gene
            is_serine_site         = 1 if amino_acids_string[lookback_size] == "S" else 0
            is_threonine_site      = 1 if amino_acids_string[lookback_size] == "T" else 0
            is_tyrosine_site       = 1 if amino_acids_string[lookback_size] == "Y" else 0
            is_human               = "HUMAN" in f"{abbreviated_gene_species}"
            is_phos_site           = 1
        
        is_phos_site = "1"
        
        row_as_string = "\t".join([
            str(each) for each in [
                site_id,
                uniprot_gene_id,
                index_relative_to_gene,
                amino_acids,
                is_serine_site,
                is_threonine_site,
                is_tyrosine_site,
                is_human,
                is_phos_site,
            ]
        ])+"\n"
        
        file.write(row_as_string)

    # all not-phos human sites
    for row_data in sites.values():
        row_as_string = "\t".join([
            str(each) for each in row_data
        ])+"\n"
        
        file.write(row_as_string)