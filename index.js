/* eslint-disable no-trailing-spaces */
// New project with Row node module .

// Project Name : Uptime monitoring Applications

// dependencies

const http = require('http');
const { HandleReqRes2 } = require('./helpers/HandleReqRes');
// app object - module scaffolding

const app = {};

// configuration
app.config = {
    port: 5000,
};

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log('server is running at ', app.config.port);
    });
};

// handle req res

app.handleReqRes = HandleReqRes2;

app.createServer();
