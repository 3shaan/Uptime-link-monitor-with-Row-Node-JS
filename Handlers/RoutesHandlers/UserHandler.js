/* eslint-disable prettier/prettier */

const data = require('../../lib/data');
const { hashPassword } = require('../../lib/utilities');

const users = {};

users.userHandler = (requestProperties, callBack) => {
    const acceptedMethod = ['get', 'post', 'put', 'delete'];
    if (acceptedMethod.indexOf(requestProperties.method) > -1) {
        users._users[requestProperties.method](requestProperties, callBack);
    } else {
        callBack(405);
    }
};

users._users = {};
users._users.get = (requestProperties, callBack) => {
    callBack(200);
};
users._users.post = (requestProperties, callBack) => {
    const firstName =
        typeof requestProperties.body.firstName === 'string' &&
            requestProperties.body.firstName.trim().length > 0
            ? requestProperties.body.firstName
            : null;
    const lastName = typeof requestProperties.body.lastName === 'string' &&
        requestProperties.body.lastName.trim().length > 0
        ? requestProperties.body.lastName
        : null;
    const phone = typeof requestProperties.body.phone === 'string' &&
        requestProperties.body.phone.trim().length === 11
        ? requestProperties.body.phone
        : null;
    const password = typeof requestProperties.body.password === 'string' &&
        requestProperties.body.password.trim().length > 0
        ? requestProperties.body.password
        : null;
    const tosAgreement = typeof requestProperties.body.tosAgreement === 'boolean' ? requestProperties.body.tosAgreement
        : null;

    console.log(firstName, lastName, phone, password, tosAgreement);
    if (firstName && lastName && phone && password && tosAgreement) {
        data.readFile('users', 'allUsers', (err, users) => {
            if (err) {
                let userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hashPassword(password),
                    tosAgreement,
                };
                data.createFile('users', 'allUsers', userObject, (err2) => {
                    if (!err2) {
                        callBack(200, {
                            msg: 'user was created successfully',
                        })
                    }
                    else {
                        callBack(500, { error: 'There was a server side error' });
                    }
                })
            }
            else {
                callBack(500, {
                    error: 'there was a server side error',
                });
            }
        });
    }
    else {
        callBack(400, {
            error: 'you have a problem with your request',
        });
    }
};
users._users.put = (requestProperties, callBack) => { };
users._users.delete = (requestProperties, callBack) => { };

module.exports = users;
