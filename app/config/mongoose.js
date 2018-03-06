/**
 *  Development Environment
 */
exports.default = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://192.168.1.183:27017/msda-sessions-store-development',
            modelsDir: 'models'
        }
    }
};

/**
 *  Development Environment
 */
exports.staging = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://192.168.4.169:27017/msda-sessions-store-development',
            modelsDir: 'models'
        }
    }
};

/**
 *  Staging Environment
 */
exports.staging = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://192.168.4.169:27017/msda-sessions-store-staging',
            modelsDir: 'models'
        }
    }
};

/**
 *  Production Environment
 */
exports.production = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://192.168.1.183:27017/msda-sessions-store-production',
            modelsDir: 'models'
        }
    }
};
