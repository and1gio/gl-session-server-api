'use strict';

module.exports = {
    run: function (app, next) {

        app.moment = require('moment');

        app.mongoDB = {
            mongoose: require('mongoose'),
            models: {}
        };

        app.logger.info('### connecting to mongo ###');
        app.mongoDB.mongoose.connect(app.config.mongoose.uri);

        var connection = app.mongoDB.mongoose.connection;

        connection.on('error', function name(params) {
            app.logger.info('### connection error ###');
            process.exit(1);
        });

        connection.once('open', function () {
            app.logger.info('### connected ###');
            require(app.folderPath.app.root + '/' + app.config.mongoose.modelsDir + '/Session')(app);
			require(app.folderPath.app.root + '/' + app.config.mongoose.modelsDir + '/OldSession')(app);
            next();
        });
    }
};




