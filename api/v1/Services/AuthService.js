const bcrypt = require('bcrypt');
const UserModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken');


module.exports.register = function (data) {
    return new Promise((resolve, reject) => {

        bcrypt.hash(data.pass, 10, function(err, hash) {
            if (err) { throw (err) }

            data.pass = hash;
            delete data.re_pass;
            console.log(data);
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
                const [ user ] = res;
                if (user) {
                    const accessToken = jwt.sign(
                        { username: user.email, id: user.id },
                        process.env.TOKEN_SECRET,
                        { expiresIn: 60 * 60 }
                    );
                    // console.log(user)
                    // console.log(b)
                    bcrypt.compare(data.pass, user.password, function (err, res) {
                        if (err) { throw (err) }
                        if (res) {
                            resolve({ token: accessToken })
                        }
                        else {
                            reject({ message: 'Email or Password is wrong!'});
                        }
                    });

                    bcrypt.hash('mypassword', 10, function(err, hash) {
                        if (err) { throw (err); }

                        bcrypt.compare('mypassword', hash, function(err, result) {
                            if (err) { throw (err); }
                            console.log(result);
                        });
                    });
                }
            })
            .catch((e) => {
                reject(e);
            })
    })
}