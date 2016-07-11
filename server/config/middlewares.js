/**
 *  Development Environment
 *  { property : file }
 */
exports.default = function (app) {
    return {
        middlewares: [
            'error-handler',
            'hostname-logger'
        ]
    }
};
