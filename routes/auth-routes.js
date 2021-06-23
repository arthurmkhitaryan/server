const UserController = require("../api/v1/Controllers/UserController");
const {isValidRegisterRequest, isValidLoginRequest} = require('../api/v1/Requests/authRequests');
const {LoginRoute, MeRoute, RegisterRoute} = require('../constants/routes/routes')

const routes = [
    {
        prefix: 'auth',
        path: RegisterRoute,
        method: 'post',
        action: UserController.register,
        request: [isValidRegisterRequest],
        // middlewares: []
    },
    {
        prefix: 'auth',
        path: LoginRoute,
        method: 'post',
        action: UserController.login,
        request: [isValidLoginRequest],
    },
    {
        prefix: 'auth',
        path: MeRoute,
        method: 'get',
        action: UserController.me,
    }
];

module.exports = routes;