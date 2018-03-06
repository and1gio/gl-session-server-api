module.exports = function (app) {
    return {
        body: {
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
        }
    };
};