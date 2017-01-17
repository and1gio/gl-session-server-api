'use strict';

/**
 * Current Directory
 */
var dir = __dirname;

/**
 * Module dependencies.
 */
var initializersLoader = require("./core/bin/initializers-loader");

/**
 * Required Modules
 */
var fs = require("fs");
var camelCase = require('camelcase');
var lodash = require("lodash");

/**
 * load initializers
 */
var app = {

    folderPath: {
        root: dir,
        app: {
            root: dir + '/app/',
            initializer: dir + '/app/initializers/',
            config: dir + '/app/config/'
        }
    },

    env: process.env.NODE_ENV,

    _: lodash,

    utils: {
        buildModulesInFolder: function (app, namespace, dir) {
            if (fs.existsSync(dir)) {
                var rootDir = fs.readdirSync(dir);

                if (rootDir && rootDir.length > 0) {
                    rootDir.forEach(function (file) {
                        var nameParts = file.split('/');
                        var name = camelCase(nameParts[(nameParts.length - 1)].split(".")[0]);
                        var filePath = dir + file;

                        if (fs.lstatSync(filePath).isDirectory()) {
                            namespace[name] = {};
                            return app.utils.buildModulesInFolder(app, namespace[name], filePath + '/');
                        } else {
                            if (fs.existsSync(filePath)) {
                                var module = require(filePath);
                                namespace[name] = new module(app);
                            }
                        }
                    });
                }
            }
        },
        callSessionLoaders: function (valNamespace, fnNamespace, req, asyncFunctions) {
            for (var i in fnNamespace) {
                if (typeof fnNamespace[i] == "function" || typeof fnNamespace[i].fn == "function") {
                    asyncFunctions.push((function (index) {
                        var fn = fnNamespace[index].fn || fnNamespace[index];
                        return function (next) {
                            fn(req, function (err, res) {
                                if (!err) {
                                    valNamespace[index] = res;
                                }
                                next(err);
                            });
                        }
                    })(i));
                } else {
                    if (fnNamespace[i].include || fnNamespace[i].exclude) {
                        continue;
                    }
                    valNamespace[i] = {};
                    app.utils.callSessionLoaders(valNamespace[i], fnNamespace[i], req, asyncFunctions);
                }
            }
        }
    }
};

/**
 * Start Initializer Loader
 */
initializersLoader(app, function (err) {
});