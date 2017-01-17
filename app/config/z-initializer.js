/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zInitializer: [
            { type: 'module', name: 'z-express-initializer', enabled: true },
            { type: 'module', name: 'z-session-initializer', enabled: true },
            { type: 'module', name: 'z-api-request-helper-initializer', enabled: true },
            { type: 'module', name: 'z-route-controller-initializer', enabled: true },
            { type: 'module', name: 'z-translate-client-initializer', enabled: true },
            { type: 'module', name: 'z-errors-client-initializer', enabled: true },
            { type: 'module', name: 'z-validator-initializer', enabled: true },
            { type: 'app', name: 'mongoose-initializer', enabled: true },
            { type: 'module', name: 'z-route-initializer', enabled: true },
            { type: 'module', name: 'z-http-server-initializer', enabled: true }
        ]
    }
};
