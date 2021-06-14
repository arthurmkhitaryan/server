const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../Models/UserModel')


module.exports.register = function (data) {
  // console.log(data)
  return new Promise((resolve, reject) => {
    bcrypt.hash(data.pass, 10)
        .then(hash => {
          data.pass = hash;
          delete data.re_pass;
          return data;
        }).then((data) => {
          UserModel.createUser(data)
          resolve()
    }).catch(err => {
      reject(err)
    })
  })
}