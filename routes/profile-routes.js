const { CVRoute, MyCVs } = require("../constants/routes/routes");
const ProfileController = require('../api/v1/Controllers/ProfileController');
const AuthMiddleware = require('../api/v1/Middleware/auth-middleware');
const multer = require('multer');
const upload = multer();

console.log(upload)

const routes = [
    {
        prefix: 'profile',
        path: CVRoute,
        method: 'post',
        action: ProfileController.saveCV,
        middlewares: [upload.any(), AuthMiddleware]
    },
    {
        prefix: 'profile',
        path: MyCVs,
        method: 'get',
        action: ProfileController.myCVs,
        middlewares: [AuthMiddleware]
    },

]

module.exports = routes;
