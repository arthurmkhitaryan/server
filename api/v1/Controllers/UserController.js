const {validationResult} = require('express-validator');
const {response} = require('../../../helpers/helper');
const AuthService = require("../Services/AuthService");

module.exports.register = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json(response(false, errors));
    }

    AuthService.register(req.body)
    .then((resp) => {
        res.status(200).json(response(true, resp));
    })
    .catch((err) => {
        res.status(400).json(response(false, err));
    })
}

module.exports.login = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json(response(false, errors));
    }

    AuthService.login(req.body)
    .then((resp) => {
        res.status(200).json(response(true, resp))
    })
    .catch((err) => {
        res.status(404).json(response(false, err))
    })
}

// exports.login = function (req, res) {
//   let errLogin = validationResult(errLogin);
//
//   errLogin = errLogin.array();
//
//   if (errLogin.length > 0) {
//     req.session.errLogin = errLogin;
//   }
//
// }