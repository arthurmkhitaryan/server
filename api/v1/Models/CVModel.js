const BaseModel = require("./BaseModel");

class CVModel extends BaseModel {
    constructor(data) {
        super();
        this.data = data;
    }

    static createCV(data) {
        return new Promise((resolve, reject) => {
            return  BaseModel.insert('cv', data).execute('CV Created Successfully!')
                .then((res) => {
                    resolve(res)
                })
                .catch((e) => {
                    reject(e);
                })
        })
    }

    static selectCVs(data, id) {
        return new Promise((resolve, reject) => {
            BaseModel.select(data)
                .where('userId', "=", id)
                .execute()
                .then((res) => {
                    resolve(res);
                })
                .catch((e) => {
                    reject(e)
                })
        })
    }
}

module.exports = CVModel;