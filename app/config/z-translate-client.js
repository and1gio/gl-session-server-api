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