const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {
    constructor(...data) {
        super();
        this.data = data;
    }

    static createUser(data) {
        return new Promise((resolve, reject) => {
           return  BaseModel.insert('users', data).execute('User has been registered successfully!')
                .then((res) => {
                    resolve(res)
                })
                .catch((e) => {
                    reject(e);
                })
        })
    }

    static selectUser(data) {
        return new Promise((resolve, reject) => {
            BaseModel.select('users')
            .where('email', "=", data.email)
            .execute('Login Success!')
            .then((res) => {
                resolve(res);
            })
            .catch((e) => {
                reject(e)
            })
        })
    }
}

module.exports = UserModel;
