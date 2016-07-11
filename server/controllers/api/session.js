module.exports = function (app) {

    var bl = {};

    var EXTEND_SESSION_BY_MINUTES = 30;

    bl.addEdit = function (req, cb) {
        var params = req.body.data;

        // TODO - we have to replace this with gl-params-validator module
        var errorKeywords = [];
        if (!params || !params.sessionToken) {
            errorKeywords.push('SESSION_TOKEN_REQUIRED');
        }

        if (!params || !params.userToken) {
            errorKeywords.push('USER_TOKEN_REQUIRED');
        }

        if (!params || !params.sessionData) {
            errorKeywords.push('SESSION_DATA_REQUIRED');
        }

        if (errorKeywords.length > 0) {
            return cb(app.errorsClient.getError(errorKeywords), null);
        }

        app.db.models.Session.getBySessionToken(params.sessionToken, function (retrieveError, data) {
            if (retrieveError) {
                return cb(app.errorsClient.getError(['ERROR_WHILE_RETRIEVING_SESSION']), null);
            }

            if (data) {
                data.sessionData = params.sessionData;
            } else {
                data = new app.db.models.Session(params);
            }

            if (!params.expireAt) {
                data.expireAt = app.moment().add(EXTEND_SESSION_BY_MINUTES, 'm');
            }

            data.save(function (saveError) {
                if (saveError) {
                    return cb(app.errorsClient.getError('ERROR_WHILE_SAVING_SESSION'), null);
                }
                return cb(null, { result: {data: {success: true}}})
            });
        });
    };

    bl.getBySessionToken = function (req, cb) {
        var params = req.body.data;

        app.logger.winston.log('info', params);

        // TODO - we have to replace this with gl-params-validator module
        if (!params || !params.sessionToken) {
            return cb(app.errorsClient.getError(['SESSION_TOKEN_REQUIRED']), null);
        }

        app.db.models.Session.getBySessionToken(params.sessionToken, function (error, data) {
            if (error) {
                return cb(app.errorsClient.getError(['ERROR_WHILE_RETRIEVING_SESSION']), null);
            }

            // TODO
            if(data){
                data.expireAt = app.moment().add(EXTEND_SESSION_BY_MINUTES, 'm');
                data.save(function(saveError){});
            }

            cb(null, {result: { data: data } });
        });
    };

    bl.getByUserToken = function (req, cb) {
        var params = req.body.data;

        // TODO - we have to replace this with gl-params-validator module
        if (!params || !params.userToken) {
            return cb(app.errorsClient.getError(['USER_TOKEN_REQUIRED']), null);
        }

        app.db.models.Session.getByUserToken(params.userToken, function (error, data) {
            if (error) {
                return cb(app.errorsClient.getError(['ERROR_WHILE_RETRIEVING_SESSION']), null);
            }
            cb(null, {result: {data: data} });
        });
    };

    bl.deleteBySessionToken = function (req, cb) {
        var params = req.body.data;

        // TODO - we have to replace this with gl-params-validator module
        if (!params || !params.sessionToken) {
            return cb(app.errorsClient.getError(['SESSION_TOKEN_REQUIRED']), null);
        }

        app.db.models.Session.getBySessionToken(params.sessionToken, function (retrieveError, data) {
            if (retrieveError) {
                return cb(app.errorsClient.getError(['ERROR_WHILE_RETRIEVING_SESSION']), null);
            }

            if (!data) {
                return cb(null, { result: {data: {success: true}}});
            }

            app.db.models.Session.remove({_id: data._id}, function(deleteError){
                if (deleteError) {
                    return cb(app.errorsClient.getError('ERROR_WHILE_DELETING_SESSION'), null);
                }
                return cb(null, { result: {data: {success: true}}});
            });
        });
    };

    bl.deleteByUserToken = function (req, cb) {
        // TODO
    };

    bl.deleteAll = function (req, cb) {
        // TODO
    };

    return bl;
};
