/**
 *  Development Environment
 */
exports.default = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://192.168.4.169:27017/msda-sessions-store'
        }
    }
};

/**
 *  Staging Environment
 */
exports.staging = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://127.0.0.1:27017/msda-sessions-store'
        }
    }
};

/**
 *  Production Environment
 */
exports.production = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://127.0.0.1:27017/msda-sessions-store'
        }
    }
};
