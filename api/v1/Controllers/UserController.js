const {validationResult} = require('express-validator');
const { response } = require('../../../helpers/helper');
const AuthService = require("../Services/AuthService");

module.exports.register = function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send(...response(false, errors, 422));
  }
  AuthService.register(req.body).then((res) => {

  })

  // console.log('register method')

  // if (isValidRegisterRequest(req)) {
  //
  // } else {
  //   return 'error';
  // }

  // let errReg = validationResult(req);
  //
  // errReg = errReg.array();
  //
  // if(errReg.length > 0) {
  //   req.session.errReg = errReg;
  //   res.redirect('/register');
  // }else {
  //   bcrypt.hash(req.body.password, (err, hash) => {
  //     req.body.password = hash;
  //     delete req.body.re_pass;
  //     userModel.insert(body);
  //     res.redirect('/login')
  //   })
  // }
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