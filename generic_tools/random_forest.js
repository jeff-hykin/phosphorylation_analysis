import { RandomForestClassifier } from "https://esm.sh/random-forest-classifier@0.6.0"

export class RandomForest {
    constructor({ numberOfTrees }) {
        this.numberOfTrees = numberOfTrees
        this._classifier = new RandomForestClassifier({
            n_estimators: this.numberOfTrees
        })
        this.trees = null
    }

    /**
     * fit some data
     *
     * @example
     *     let trees = await forest.fit({
     *         data: [ { input: 1, output: 2 } ],
     *         inputAttributes: [ 'input' ],
     *         attributeToPredict: 'output',
     *     })
     *
     * @param arg1.data - 
     * @param arg1.inputAttributes - 
     * @param arg1.attributeToPredict - 
     *
     */
    async fit({ data, inputAttributes, attributeToPredict }) {
        return new Promise((resolve, reject)=>{
            this._classifier.fit(data, inputAttributes, attributeToPredict, (err, trees) => {
                if (err) {
                    reject(err)
                } else {
                    this.trees = trees
                    resolve(this)
                }
            })
        })
    }

    /**
     * Description
     *
     * @param {[Object]} arg1 - list of objects (no label attributes) 
     * @returns {[label]} output - a list of labels
     *
     */
    predict(data) {
        if (!this.trees) {
            throw Error(`RandomForest: something called .predict() before calling .fit(); I can't make a prediction without data.\nMake sure to do await forest.fit() and not just forest.fit()`)
        }
        return this._classifier.predict(data, this.trees)
    }
}