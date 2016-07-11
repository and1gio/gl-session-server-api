/**
 *  "mongodb": "1.4.5"
 *  "mongoose": "4.1.8"
 */
module.exports = {
    runPriority: 20,
    disabled: false,
    runFn: function (app, next) {
        var mongoose = require('mongoose');

        if(app.db){
            app.db.mongoose = mongoose;
            app.db.models = {};
        } else {
            app.db = { mongoose : mongoose, models: {} };
        }

        console.log('...connecting to mongoDB');
        app.db.mongoose.connect(app.config.mongoose.uri);
        var connection = app.db.mongoose.connection;

        connection.on('error', function name(params) {
            console.log('...connection error:');
            process.exit(1);
        }); 

        connection.once('open', function () {
	        console.log('...connected');

            require(app.rootFolder + '/schemas/Session')(app);

            next();
        });



    }
};

