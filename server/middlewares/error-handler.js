module.exports = function (app) {
    app.express.use(function (err, req, res, next) {
        console.log("******* ERROR-HANDLER *******");
        console.log(err);
        console.log("******* ERROR-HANDLER *******");

        var errors = null;
        if (!err || typeof err != "object") {
            errors = app.errorsClient.getError(["UNHANDLED_EXCEPTION"]);
        } else if (!err || !(err instanceof Array) || err.length == 0) {
            errors = app.errorsClient.getError(["BAD_RESPONSE_ERROR_OBJECT"]);
        } else {
            errors = err;
        }

        if (errors && errors.length > 0) {
            for (var i in errors) {
                errors[i].message = app.translateClient.get(app.config.app.defaultLanguage, errors[i].keyword);
            }
        }

        // TODO - here should be errors after msda-http-request-helper will be refactored
        res.json({error: errors});
    });
};
