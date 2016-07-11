/**
 *  Development Environment
 */
exports.default = function (app) {
    return {
        app: {
            frontEndDebugMode: true,
            defaultLanguage: "ge"
        }
    }
};

/**
 *  Staging Environment
 */
exports.staging = function (app) {
    return {
        app: {
            frontEndDebugMode: true,
            defaultLanguage: "ge"
        }
    }
};

/**
 *  Production Environment
 */
exports.production = function (app) {
    return {
        app: {
            frontEndDebugMode: false,
            defaultLanguage: "ge"
        }
    }
};
