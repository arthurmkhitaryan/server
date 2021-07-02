const { CVRoute } = require("../constants/routes/routes");
const ProfileController = require('../api/v1/Controllers/ProfileController')

const routes = [
    {
        prefix: 'profile',
        path: CVRoute,
        method: 'post',
        action: ProfileController.saveCV,
    }
]

module.exports = routes;
