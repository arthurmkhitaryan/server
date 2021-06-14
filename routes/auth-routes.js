const UserController = require("../api/v1/Controllers/UserController");
const isValidRegisterRequest = require('../api/v1/Requests/authRequests');

const routes = [
  {
    prefix: 'auth',
    path: '/register',
    method: 'post',
    action: UserController.register,
    request: [ isValidRegisterRequest ],
    // middlewares: []
  },
];

module.exports = routes;