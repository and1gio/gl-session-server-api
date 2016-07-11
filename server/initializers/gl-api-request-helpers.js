var GLApiRequestHelper = require('gl-api-request-helper');

module.exports = {
    runPriority: 5,
    runFn: function (app, next) {
        if(!app.requestHelpers){
            app.requestHelpers = {};
        }
        for (var config in app.config.requestHelpers) {
            app.requestHelpers[config] = new GLApiRequestHelper(app.config.requestHelpers[config]);
        }
        next();
    }
};

