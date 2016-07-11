var fs = require("fs");
var camelCase = require('camelcase');

module.exports = {
    runPriority: 70,
    runFn: function (app, next) {
        app.apiBL = {};
        readDir(app, app.apiBL, app.rootFolder + "controllers/api");
        next();
    }
};

var readDir = function (app, namespace, dir) {
    fs.readdirSync(dir).forEach(function (file) {
        var nameParts = file.split('/');
        var name = camelCase(nameParts[(nameParts.length - 1)].split(".")[0]);
        var filePath = dir + "/" + file;

        if (fs.lstatSync(filePath).isDirectory()) {
            namespace[name] = {};
            return readDir(app, namespace[name], filePath);
        }

        var module = require(filePath);
        namespace[name] = new module(app);
    });
};