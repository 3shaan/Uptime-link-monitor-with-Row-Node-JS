// about me routed handler

const handler = {};

handler.aboutHandler = (requestProperties, callBack) => {
    callBack(200, {
        msg: 'my name is eshan',
    });
};

module.exports = handler;
