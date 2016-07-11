var GLTranslateClient = require("gl-translate-client");

module.exports = {
    runPriority: 4,
    runFn: function (app, next) {
        app.translateClient = new GLTranslateClient(app.config.translateClient);
        app.translateClient.load(function (err, res) {
            if(err){
                console.log("!!! - TRANSLATE CLIENT - !!!");
                console.log("------ FAILED TO LOAD -------");
                console.log("!!! - TRANSLATE CLIENT - !!!");
            }
        });
        next();
    }
};