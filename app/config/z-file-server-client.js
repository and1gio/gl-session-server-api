/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zFileServerClient: {
            host: 'localhost',
            port: 8080,
            path: '/api/',
            key:  'secretKey'
        }
    }
};