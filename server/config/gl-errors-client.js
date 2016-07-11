exports.default = function (app) {
    return {
        errorsClient: {
            host: 'bl-s.msda.ge',
            port: '3033',
            path: '/api/'
        }
    }
};

exports.staging = function (app) {
    return {
        errorsClient: {
            host: 'bl-s.msda.ge',
            port: '3033',
            path: '/api/'
        }
    }
};

exports.production = function (app) {
    return {
        errorsClient: {
            host: 'bl.msda.ge',
            port: '3033',
            path: '/api/'
        }
    }
};
