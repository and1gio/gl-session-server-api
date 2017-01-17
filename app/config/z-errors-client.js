/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zErrorsClient: {
            host: 'bl-s.msda.ge',
            port: '3033',
            path: '/api/'
        }
    }
};