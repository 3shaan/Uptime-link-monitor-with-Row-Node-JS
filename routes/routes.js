// all routes will be handle here ;

const { aboutHandler } = require('../Handlers/RoutesHandlers/aboutHandle');

const routes = {
    about: aboutHandler,
};

module.exports = routes;
