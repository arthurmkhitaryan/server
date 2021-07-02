const express = require('express');
const route = express.Router();
const authRoutes = require('./auth-routes');
const profileRoutes = require('./profile-routes');

const routes = [
    ...authRoutes,
    ...profileRoutes
];

routes.forEach((eachRoute) => {
        route[eachRoute.method](`/${eachRoute.prefix}${eachRoute.path}`,
            ...(eachRoute.request ? eachRoute.request : []),
            ...(eachRoute.middlewares ? eachRoute.middlewares : []),
            eachRoute.action);
})

module.exports = route;


