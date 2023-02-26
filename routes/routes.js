// all routes will be handle here ;

const { aboutHandler } = require('../Handlers/RoutesHandlers/aboutHandle');
const { userHandler } = require('../Handlers/RoutesHandlers/UserHandler');

const routes = {
    about: aboutHandler,
    user: userHandler,
};

module.exports = routes;
