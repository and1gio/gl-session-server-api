var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = {
    runPriority: 3,
    runFn: function (app, next) {
        app.express = express();
        app.router = express.Router();

        app.cookieParser = cookieParser();

        // View engine setup
        app.express.set('views', app.rootFolder + 'views');
        app.express.set('view engine', 'pug');

        // Uncomment after placing your favicon in /public
        //app.express.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

        app.express.use(logger('dev'));
        app.express.use(bodyParser.json());
        app.express.use(bodyParser.urlencoded({extended: false}));
        app.express.use(app.cookieParser);
        app.express.use(express.static(app.rootFolder + 'public'));

        next();
    }
};
