module.exports = {
    runPriority: 5,
    runFn: function (app, next) {
        var winston = require('winston');
        app.logger = {
            winston: winston
        };

        next();
    }
};