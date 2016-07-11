module.exports = {
    runPriority: 40,
    runFn: function (app, next) {
        for (var i in app.config.routes) {
            var module = require(app.rootFolder + "routes" + app.config.routes[i]);
            app.express.use(i, module(app));
        }
        next();
    }
};
