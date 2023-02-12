/* eslint-disable no-trailing-spaces */
// New project with Row node module .

// Project Name : Uptime monitoring Applications

// dependencies

const http = require('http');
const { HandleReqRes2 } = require('./helpers/HandleReqRes');
const environmentToExport = require('./helpers/Environments');
// app object - module scaffolding

const app = {};

// configuration
// app.config = {
//     port: 5000,
// };

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environmentToExport.port, () => {
        console.log('server is running at ', environmentToExport.port);
    });
};

// handle req res

app.handleReqRes = HandleReqRes2;

app.createServer();
