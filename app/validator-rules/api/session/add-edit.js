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
            },
            "data.userToken": {
                presence: {
                    message: "^USER_TOKEN_REQUIRED"
                }
            },
            "data.sessionData": {
                presence: {
                    message: "^SESSION_DATA_REQUIRED"
                }
            }
        }
    };
};