const db = require('../../../db');

class BaseModel {
    constructor() {
        this.sql = '';
    }

    static insert(tableName, dataObj) {
        let cols = '';
        let values = '';
        for (let key in dataObj) {
            if (dataObj.hasOwnProperty(key)) {
                if (key !== Object.keys(dataObj)[Object.keys(dataObj).length - 1]) {
                    cols += `\`${key}\`, `;
                    values += `'${dataObj[key]}', `;
                } else {
                    cols += `\`${key}\``;
                    values += `'${dataObj[key]}'`;
                }
            }
        }
        this.sql = `INSERT INTO ${tableName}(${cols}) VALUES(${values});`;
        return this;
    }

    static select(tableName, col = '*') {
        this.sql = `SELECT ${col} FROM ${tableName}`
        return this;
    }

    static where(field, cond, newField) {
        this.sql += ` WHERE ${field} ${cond} '${newField}'`
        return this;
    }

    static execute(executeMessage) {
        return new Promise((resolve, reject) => {
            db.query(this.sql, (err, data) => {
                if (err) {
                    if (err.sqlState === '23000') reject({
                        errors: [
                            {
                                "msg": "This email is already registered!",
                                "param": "email",
                            }
                        ]
                    });
                    reject(err);
                }

                switch (true) {
                    case Array.isArray(data):
                        resolve(data, {message: executeMessage, data});
                        break;
                    default:
                        resolve(data, {message: executeMessage});
                }
            });
        });
    }
}

module.exports = BaseModel;