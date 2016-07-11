var GLErrorsClient = require("gl-errors-client");

module.exports = {
    runPriority: 4,
    runFn: function (app, next) {
        app.errorsClient = new GLErrorsClient(app.config.errorsClient);
        app.errorsClient.load(function (err, res) {
            if (err) {
                console.log("!!! - ERRORS CLIENT - !!!");
                console.log("----- FAILED TO LOAD -----");
                console.log("!!! - ERRORS CLIENT - !!!");
            }
        });
        next();
    }
};