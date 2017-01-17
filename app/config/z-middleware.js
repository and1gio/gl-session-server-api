/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zMiddleware: {
            beforeRoute: {
                rootDir: "middleware/before-route",
                middleware: []
            },
            afterRoute: {
                rootDir: "middleware/after-route",
                middleware: ['error-handler']
            }
        }
    }
};
