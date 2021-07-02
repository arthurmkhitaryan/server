const UserController = require("../api/v1/Controllers/UserController");
const {isValidRegisterRequest} = require('../api/v1/Requests/authRequests');
const {LoginRoute, MeRoute, RegisterRoute} = require('../constants/routes/routes');
const AuthMiddleware = require('../api/v1/Middleware/auth-middleware');

const routes = [
    {
        prefix: 'auth',
        path: RegisterRoute,
        method: 'post',
        action: UserController.register,
        request: [isValidRegisterRequest],
    },
    {
        prefix: 'auth',
        path: LoginRoute,
        method: 'post',
        action: UserController.login,
    },
    {
        prefix: 'auth',
        path: MeRoute,
        method: 'get',
        action: UserController.me,
        middlewares: [AuthMiddleware],
    }
];

module.exports = routes;