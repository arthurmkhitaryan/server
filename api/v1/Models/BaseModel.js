const db = require('../../../db');
const { renameProperty } = require('../../../helpers/helper');

class BaseModel {
  constructor() {
    this.sql = '';
  }

  static insert (tableName, dataObj) {
      renameProperty(dataObj, 'day', 'bird_day');
      renameProperty(dataObj, 'pass', 'password');
      let cols = '';
      let values = '';
      for (let key in dataObj) {
        if (dataObj.hasOwnProperty(key)){
          if (key !== Object.keys(dataObj)[Object.keys(dataObj).length-1]){
            cols += `\`${key}\`, `;
            values += `'${dataObj[key]}', `;
          }else {
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
          reject(err);
        }
      console.log(data, 'jedguwgedu')
        if (!data?.length){
          resolve(data, { message: executeMessage, user: [data[0]] });
        }else{
          resolve(data, { message: executeMessage });
        }
      });
    });
  }
}

module.exports = BaseModel;