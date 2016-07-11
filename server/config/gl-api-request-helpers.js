exports.default = function (app) {
    return {
        requestHelpers: {
            languages: {
                host: 'bl-s.msda.ge',
                port: '3032',
                path: '/api/'
            },
            errors: {
                host: 'bl-s.msda.ge',
                port: '3033',
                path: '/api/'
            },
            userManagement: {
                host: 'bl-s.msda.ge',
                port: '3023',
                path: '/api/'
            }
        }
    }
};

exports.staging = function (app) {
    return {
        requestHelpers: {
            languages: {
                host: 'localhost',
                port: '3032',
                path: '/api/'
            },
            errors: {
                host: 'localhost',
                port: '3033',
                path: '/api/'
            },
            userManagement: {
                host: 'bl-s.msda.ge',
                port: '3023',
                path: '/api/'
            }
        }
    }
};

exports.production = function (app) {
    return {
        requestHelpers: {
            languages: {
                host: 'localhost',
                port: '3032',
                path: '/api/'
            },
            errors: {
                host: 'localhost',
                port: '3033',
                path: '/api/'
            },
            userManagement: {
                host: 'bl-s.msda.ge',
                port: '3023',
                path: '/api/'
            }
        }
    }
};