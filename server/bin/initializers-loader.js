var fs = require("fs");

module.exports = function (app, cb) {

    console.log("APPLICATION STARTED");
    console.log("=========================");

    console.log('ROOT FOLDER:', app.rootFolder);
    console.log('MACHINE ENVIRONMENT:', app.env);

    require("./configs-loader")(app, function(){
        console.log("****************************");
        console.log("CONFIGS LOADED SUCCESSFULLY");
        console.log("****************************");
        //console.log(app.config);
    });
    console.log("=========================");

    var initializersFolder = app.rootFolder + 'initializers';

    var modules = loadInitializers(initializersFolder);

    var sortedInitializers = modules.sort(function (a, b) {
        return a.runPriority - b.runPriority;
    });

    console.log("INITIALIZERS: STARTED");
    console.log("=========================");

    startInitializerChain(app, sortedInitializers, function (err) {
        console.log("=========================");
        console.log("INITIALIZERS: FINISHED");
        console.log("=========================");
        cb(err);
    });
};

var startInitializerChain = function (app, initializers, cb) {
    var index = 0;
    startInitializer(app, initializers, index, cb);
};

var startInitializer = function (app, initializers, index, cb) {
    var initializer = initializers[index];
    if (!initializer) {
        return cb();
    }

    if (!initializer.disabled) {
        console.log('INITIALIZING: [' + initializer.name + ']. Run Priority:  ' + initializer.runPriority);
        initializer.runFn(app, function (err) {
            if (err) {
                console.log(err);
                process.exit(1);
            }

            index++;
            startInitializer(app, initializers, index, cb);
        });
    }else{
        index++;
        startInitializer(app, initializers, index, cb);
    }
};

var loadInitializers = function (dir) {
    var modules = [];

    fs.readdirSync(dir).forEach(function (file) {
        var name = file.split(".")[0];
        var module = require(dir + "/" + file);
        module.name = name;
        modules.push(module);
    });

    return modules;
};
