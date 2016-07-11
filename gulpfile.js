'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// start development mode
gulp.task('server.dev', function () {
    return nodemon({restartable: "rs", ignore: ["*.*"], script: 'server/bin/www', env: {'NODE_ENV': 'development'}});
});

// start staging mode
gulp.task('server.stag', function () {
    return nodemon({restartable: "rs", ignore: ["*.*"], script: 'server/bin/www', env: {'NODE_ENV': 'staging'}});
});

// start production mode
gulp.task('server.prod', function () {
    return nodemon({restartable: "rs", ignore: ["*.*"], script: 'server/bin/www', env: {'NODE_ENV': 'production'}});
});