const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');

const { loginError } = require('../../../constants/error-messages/auth');


module.exports.register = function (data) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(data.password, 10, function (err, hash) {
            if (err) {
                throw (err)
            }

            data.password = hash;
            delete data.confirm_password;
            UserModel.createUser(data)
                .then((res) => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                })
        })
    })
}

module.exports.login = function (data) {
    return new Promise((resolve, reject) => {
        UserModel.selectUser(data)
        .then((res) => {
            const [user] = res;
            if (user) {
                const accessToken = jwt.sign(
                    {
                        birth_day: user.day,
                        email: user.email,
                        gender: user.gender,
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                    },
                    process.env.TOKEN_SECRET,
                    {expiresIn: 60 * 60}
                );
                bcrypt.compare(data.password, user.password, function (err, res) {
                    if (err) {
                        throw (err)
                    }
                    if (res) {
                        delete user.password
                        resolve({user, token: accessToken})
                    } else {
                        reject({ message: loginError });
                    }
                });
            }
            else {
                reject({ message: loginError });
            }
        })
        .catch((e) => {
            reject(e);
        })
    })
}