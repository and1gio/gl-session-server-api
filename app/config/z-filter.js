/**
 *  NODE_ENV = undefined
 */
exports.default = function (app) {
    return {
        zFilter : {
            rootDir: 'filters',
            filters: ['example']
        }
    }
};