'use strict';

module.exports = function (app) {

    app.express.use(function (err, req, res, next) {
        console.log("******* ERROR-HANDLER *******");
        console.log(err);
        console.log("******* ERROR-HANDLER *******");

        var errors = null;
        if (!err || !(err instanceof Array) || err.length == 0) {
            errors = [{keyword: "UNHANDLED_EXCEPTION"}];
        } else {
            errors = err;
        }

        res.json({error: errors});
    });
};

