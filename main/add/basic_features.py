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


if True:
    print("should take about 1hr")
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

else:
    # 
    # this is an alternative method that might be a lot faster, and will give accurate ETA's
    # 
    FS.ensure_is_file(path_to.all_sites)
    first_line = ""
    with open(path_to.all_sites, "r+") as file:
        for line in file:
            first_line = line
            break

    new_filepath = path_to.all_sites+".new"
    FS.ensure_is_file(new_filepath)
    with open(new_filepath, "r+") as file:
        file.write(first_line + ("\t".join(basic_feature_names))+"\n")
        for progress, values in ProgressBar(df.values):
            values = list(values)
            site_id, uniprot_gene_id, index_relative_to_gene, amino_acids, is_serine_site, is_threonine_site, is_tyrosine_site, is_human, is_phos_site, *_ = values
            values += specific_tools.amino_window_to_feature_vec(amino_acids)
            # convert nans to empty strings
            for index, each in enumerate(values):
                if each != each:
                    values[each] = ""
            values = [ str(each) for each in values ]
            file.write("\t".join(values)+"\n")