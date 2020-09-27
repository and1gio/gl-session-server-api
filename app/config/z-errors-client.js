/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zErrorsClient: {
            host: 'bl-d.msda.ge',
            port: '3033',
            path: '/api/'
        }
    }
};

exports.staging = function (app) {
    return {
        zErrorsClient: {
            host: 'bl-s.msda.ge',
            port: '3033',
            path: '/api/'
        }
    }
};

exports.production = function (app) {
    return {
        zErrorsClient: {
            host: 'errors.msda.ge',
            port: '80',
            path: '/api/'
        }
    }
};
