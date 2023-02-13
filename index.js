/* eslint-disable no-trailing-spaces */
// New project with Row node module .

// Project Name : Uptime monitoring Applications

// dependencies

const http = require('http');
const { HandleReqRes2 } = require('./helpers/HandleReqRes');
const environmentToExport = require('./helpers/Environments');
const data = require('./lib/data');
// app object - module scaffolding

const app = {};

// configuration
// app.config = {
//     port: 5000,
// };

// data.createFile('test', 'newFile', { name: 'Eshan' }, (err) => {
//     console.log(err);
// });

// read file
// data.readFile('test', 'newFile', (err, data2) => {
//     console.log(data2);
// });

// update File
// data.updateFile('test', 'newFile', { name: 'england', lang: 'english' }, (err) => {
//     console.log(err);
// });

// deleting file
// data.deleteFile('test', 'newFile', (err) => {
//     console.log(err);
// });

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
