const crypto = require('crypto');

const utilities = {};
const environment = require('../helpers/Environments');

// parse the json from client
utilities.parseJSON = (string) => {
    let output;
    try {
        output = JSON.parse(string);
    } catch (error) {
        output = {};
    }
    return output;
};

// hash password
utilities.hashPassword = (str) => {
    if (typeof str === 'string' && str.trim().length > 0) {
        const hashPass = crypto
            .createHmac('sha256', environment.secretKey)
            .update(str)
            .digest('hex');
        return hashPass;
    }
    else {
        return false;
    }
}

module.exports = utilities;
