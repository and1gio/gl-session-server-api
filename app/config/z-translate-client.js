/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zTranslateClient: {
            host: 'bl-s.msda.ge',
            port: '3032',
            path: '/api/'
        }
    }
};

exports.staging = function (app) {
    return {
        zTranslateClient: {
            host: 'bl-s.msda.ge',
            port: '3032',
            path: '/api/'
        }
    }
};

exports.production = function (app) {
    return {
        zTranslateClient: {
            host: 'bl-s.msda.ge',
            port: '3032',
            path: '/api/'
        }
    }
};