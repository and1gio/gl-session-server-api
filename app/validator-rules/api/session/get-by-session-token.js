module.exports = function (app) {
    return {
        "data": {
            presence: {
                message: "^DATA_REQUIRED"
            }
        },
        "data.sessionToken": {
            presence: {
                message: "^SESSION_TOKEN_REQUIRED"
            }
        }
    };
};