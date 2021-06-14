const { check } = require('express-validator');

const isValidRegisterRequest = [
    check('name')
        .isLength({ min: 2 })
        .withMessage('Name min length 2 symbol.'),
    check('email')
        .isLength({ min: 2 })
        .withMessage('Email is required.')
        .isEmail().withMessage('Please provide a valid email address'),
    check('pass')
        .isLength({ min: 6 })
        .withMessage('Password length minimum 6 symbols.')
        .not().matches('re_pass')
        .withMessage('Passwords must match.'),
    check('re_pass')
        .isLength({ min: 6 })
        .withMessage('Confirm password minimum 6 symbols.')
        .not().matches('pass')
        .withMessage('Passwords must match.')
];

module.exports = isValidRegisterRequest