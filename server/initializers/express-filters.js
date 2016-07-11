module.exports = {
    runPriority: 20,
    runFn: function (app, next) {
        app.filters = {};
        for (var i in app.config.filters) {
            var module = require(app.rootFolder + "filters/" + app.config.filters[i])(app);
            app.filters[i] = {};
            for (var j in module) {
                (function (indexI, indexJ) {
                    app.filters[indexI][indexJ] = function (data) {
                        return function (req, res, next) {
                            if(data) {
                                module[indexJ](data, req, res, next);
                            } else {
                                module[indexJ](req, res, next);
                            }
                        }
                    }
                })(i, j);
            }
        }
        next();
    }
};

