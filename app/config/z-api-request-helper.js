/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zApiRequestHelper: {
            languages: {
                host: 'bl-s.msda.ge',
                port: '3032',
                path: '/api/',
                debug: true
            },
            errors: {
                host: 'bl-s.msda.ge',
                port: '3033',
                path: '/api/',
                debug: true
            },
            userManagement: {
                host: 'bl-s.msda.ge',
                port: '3023',
                path: '/api/',
                debug: true
            }
        }
    }
};

/**
 *  NODE_ENV = development
 */
exports.development = function (app) {
    return {
        zApiRequestHelper: {
            languages: {
                host: 'bl-s.msda.ge',
                port: '3032',
                path: '/api/',
                debug: true
            },
            errors: {
                host: 'bl-s.msda.ge',
                port: '3033',
                path: '/api/',
                debug: true
            },
            userManagement: {
                host: 'bl-s.msda.ge',
                port: '3023',
                path: '/api/',
                debug: true
            }
        }
    }
};

/**
 *  NODE_ENV = staging
 */
exports.staging = function (app) {
    return {
        zApiRequestHelper: {
            languages: {
                host: 'bl-s.msda.ge',
                port: '3032',
                path: '/api/',
                debug: true
            },
            errors: {
                host: 'bl-s.msda.ge',
                port: '3033',
                path: '/api/',
                debug: true
            },
            userManagement: {
                host: 'bl-s.msda.ge',
                port: '3023',
                path: '/api/',
                debug: true
            }
        }
    }
};

/**
 *  NODE_ENV = production
 */
exports.production = function (app) {
    return {
        zApiRequestHelper: {
            languages: {
                host: 'bl-s.msda.ge',
                port: '3032',
                path: '/api/',
                debug: true
            },
            errors: {
                host: 'bl-s.msda.ge',
                port: '3033',
                path: '/api/',
                debug: true
            },
            userManagement: {
                host: 'bl-s.msda.ge',
                port: '3023',
                path: '/api/',
                debug: true
            }
        }
    }
};