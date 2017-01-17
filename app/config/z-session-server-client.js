/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zSessionServerClient: {
            host: 'localhost',
            port: 5000,
            path: '/api/',
            secret: 'secret'
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = function (app) {
    return {
        zSessionServerClient: {
            host: 'localhost',
            port: 5000,
            path: '/api/',
            secret: 'secret'
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = function (app) {
    return {
        zSessionServerClient: {
            host: 'localhost',
            port: 5000,
            path: '/api/',
            secret: 'secret'
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = function (app) {
    return {
        zSessionServerClient: {
            host: 'localhost',
            port: 5000,
            path: '/api/',
            secret: 'secret'
        }
    }
};