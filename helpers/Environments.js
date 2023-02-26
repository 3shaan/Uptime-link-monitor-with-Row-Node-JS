const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'jdbfiooefdfefedf',
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'o4erjienidnee',
};

const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.production;

module.exports = environmentToExport;
