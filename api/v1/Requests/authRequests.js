const { check } = require('express-validator');

const isValidRegisterRequest = [
    check('name')
        .isLength({ min: 2 })
        .withMessage('Name min length 2 symbol.'),
    check('email')
        .isLength({ min: 2 })
        .withMessage('Email is required.')
        .isEmail().withMessage('Please provide a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password length minimum 6 symbols.')
        .not().matches('confirm_password')
        .withMessage('Passwords must match.'),
    check('confirm_password')
        .isLength({ min: 6 })
        .withMessage('Confirm password minimum 6 symbols.')
        .not().matches('password')
        .withMessage('Passwords must match.')
];

module.exports = { isValidRegisterRequest };
