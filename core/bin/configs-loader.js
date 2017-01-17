'use strict';

module.exports = function(app, cb){
    var fs = require("fs");

    app.config = {};

    loadConfig(app.folderPath.app.config);

    function loadConfig(configDir){
        fs.readdirSync(configDir).forEach(function (file) {
            var module = require(configDir + '/' + file);
            var configs = module[app.env] ? module[app.env](app) : module["default"](app);
            for (var i in configs) {
                app.config[i] = configs[i];
            }
        });
    }

    cb();
};