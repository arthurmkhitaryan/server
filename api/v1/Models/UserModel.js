const db = require("../../../db");
const { getCurrentTimeFromStamp } = require('../../../helpers/helper')

class UserModel {
  constructor(...data) {
    this.data = data;
  }

  static createUser = (data) => {
      console.log(getCurrentTimeFromStamp(data.day))
    try {
      db.query('INSERT INTO users( `name`, `surname`, `bird_day`, `email`, `password`, `gender` ) VALUES (?,?,?,?,?,?)',
         [ data.name, data.surname, data.day, data.email, data.pass, data.gender]),
          (error, results) => {
            if (error) return res.json({error: error})
          }
    }catch (e) {
      return e.message;
    }
  }
}

module.exports = UserModel;
