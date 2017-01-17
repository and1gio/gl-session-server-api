'use strict';

module.exports = function (app) {
    app.express.use(function (req, res, next) {
        var hostname = ( req.headers.host.match(/:/g) ) ? req.headers.host.slice(0, req.headers.host.indexOf(":")) : req.headers.host;
        app.logger.info("BEFORE ROUTE", hostname);
        next();
    });
};
