from specific_tools import *

# 
# read data
# 
path = path_to.phos
df = pandas.read_csv(path, sep="\t")

# 
# create data
# 
column = 'pubmed_id_for_related_references'
new_values = [0]*len(df[column])
for index, each in enumerate(df[column].values):
    new_values[index] = len(each.split(" "))
df['citation_count'] = new_values

# 
# save new column
# 
df.to_csv(path, sep='\t', encoding='utf-8', index=False)