'use strict';

var fs = require("fs");
var winston = require('winston');

var startInitializerChain = function (app, initializers, cb) {
    var index = 0;
    startInitializer(app, initializers, index, cb);
};

var startInitializer = function (app, initializers, index, cb) {
    var initializer = initializers[index];
    if (!initializer) {
        return cb();
    }

    app.logger.info(initializer.name);

    initializer.run(app, function (err) {
        if (err) {
            app.logger.warn(err);
            process.exit(1);
        }

        index++;
        startInitializer(app, initializers, index, cb);
    });
};

var loadInitializers = function (app) {
    var initializers = app.config.zInitializer;
    var modules = [];

    for(var i in initializers){
        if(initializers[i].enabled){
            var module = null;
            var name = initializers[i].name;

            switch (initializers[i].type) {
                case 'module':
                    module = require(name);
                    break;
                case 'app':
                    var path = app.folderPath.app.initializer;
                    module = require(path + name);
                    break;
                default:
            }
            module.name = name;
            modules.push(module);
        }
    }

    return modules;
};

module.exports = function (app, cb) {
    app.logger = winston;

    console.log("APPLICATION STARTED");
    console.log("=========================");

    app.logger.info('ROOT FOLDER:', app.folderPath.root);
    app.logger.info('MACHINE ENVIRONMENT:', app.env);

    require("./configs-loader")(app, function(){
        console.log("****************************");
        console.log("CONFIGS LOADED SUCCESSFULLY");
        console.log("****************************");
    });
    console.log("=========================");


    var modules = loadInitializers(app);

    console.log("INITIALIZERS: STARTED");
    console.log("=========================");

    startInitializerChain(app, modules, function (err) {
        console.log("=========================");
        console.log("INITIALIZERS: FINISHED");
        console.log("=========================");
        cb(err);
    });
};