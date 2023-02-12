// routes not found handler ;

const handler = {};

handler.notFoundHandler = (requestProperties, callBack) => {
    callBack(404, {
        msg: 'The url is not found',
    });
};

module.exports = handler;
