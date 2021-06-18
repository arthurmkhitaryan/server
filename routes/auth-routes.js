const UserController = require("../api/v1/Controllers/UserController");
const { isValidRegisterRequest , isValidLoginRequest } = require('../api/v1/Requests/authRequests');

const routes = [
  {
    prefix: 'auth',
    path: '/register',
    method: 'post',
    action: UserController.register,
    request: [ isValidRegisterRequest ],
    // middlewares: []
  },
  {
    prefix: 'auth',
    path: '/login',
    method: 'post',
    action: UserController.login,
    request: [ isValidLoginRequest ],
  },
  {
    prefix: 'auth',
    path: '/me',
    method: 'get',
    action: UserController.me,
  }
];

module.exports = routes;