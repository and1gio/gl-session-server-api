'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// start development mode
gulp.task('server.development', function () {
    return nodemon({restartable: "rs", ignore: ["*.*"], script: 'server/bin/www', env: {'NODE_ENV': 'development'}});
});

// start staging mode
gulp.task('server.staging', function () {
    return nodemon({restartable: "rs", ignore: ["*.*"], script: 'server/bin/www', env: {'NODE_ENV': 'staging'}});
});

// start production mode
gulp.task('server.production', function () {
    return nodemon({restartable: "rs", ignore: ["*.*"], script: 'server/bin/www', env: {'NODE_ENV': 'production'}});
});