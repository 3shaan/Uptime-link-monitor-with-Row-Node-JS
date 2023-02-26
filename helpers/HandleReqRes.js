const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes/routes');
const { notFoundHandler } = require('../Handlers/RoutesHandlers/notFoundHandle');
const { parseJSON } = require('../lib/utilities');

const handler = {};

handler.HandleReqRes2 = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryObj = parseUrl.query;
    const headerObj = req.headers;
    const decoder = new StringDecoder('utf-8');
    let receivedData = '';
    const requestProperties = {
        method,
        queryObj,
        headerObj,
        trimmedPath,
        parseUrl,
        path,
    };
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    // res.setHeader('content-type', 'application/json');
    req.on('data', (buffer) => {
        receivedData += decoder.write(buffer);
    });
    req.on('end', () => {
        receivedData += decoder.end();
   
        requestProperties.body = parseJSON(receivedData);

        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};
            const payloadString = JSON.stringify(payload);
          
            res.writeHead(statusCode);
            res.end(payloadString);
        });
        // console.log(receivedData);
        res.end(receivedData);
    });
    // responser handle
};

module.exports = handler;
