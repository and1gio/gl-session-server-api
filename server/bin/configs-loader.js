var fs = require("fs");

module.exports = function(app, cb){
    app.config = {};

    var CONFIG_DIR = "config";

    fs.readdirSync(app.rootFolder + CONFIG_DIR).forEach(function (file) {
        var module = require(app.rootFolder + CONFIG_DIR + '/' + file);
        var configs = module[app.env] ? module[app.env](app) : module["default"](app);

        for (var i in configs) {
            app.config[i] = configs[i];
        }
    });

    cb();
};