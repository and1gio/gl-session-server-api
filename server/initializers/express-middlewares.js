module.exports = {
    runPriority: 60,
    runFn: function (app, next) {
        for (var i in app.config.middlewares) {
            require(app.rootFolder + "middlewares/" + app.config.middlewares[i])(app);
        }
        next();
    }
};
