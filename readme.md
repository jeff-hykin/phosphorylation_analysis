

```sh
# start the Environment
virkshop/enter

# create the features
deno run -Aq ./main/generate_data.js

# train and test the models
python ./main/main.py
```