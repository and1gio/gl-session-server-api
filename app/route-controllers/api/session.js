'use strict';

module.exports = function (app) {

    var bl = {};

    var EXTEND_SESSION_BY_VALUE = 90;
    var EXTEND_SESSION_BY_DIMENSION = "m";

    bl.addEdit = function (req, cb) {
        var params = req.body.data;

        app.mongoDB.models.Session.getBySessionToken(params.sessionToken, function (retrieveError, data) {
            if (retrieveError) {
                return cb(app.errorsClient.getError(['ERROR_WHILE_RETRIEVING_SESSION']), null);
            }

            if (data) {
                data.sessionData = params.sessionData;
            } else {
                data = new app.mongoDB.models.Session(params);
            }

            if (params.sessionData.inactiveMinutesBeforeSessionDies) {
                data.expireAt = app.moment().add(params.sessionData.inactiveMinutesBeforeSessionDies, EXTEND_SESSION_BY_DIMENSION);
            } else {
                data.expireAt = app.moment().add(EXTEND_SESSION_BY_VALUE, EXTEND_SESSION_BY_DIMENSION);
            }

            data.save(function (saveError) {
                if (saveError) {
                    return cb(app.errorsClient.getError('ERROR_WHILE_SAVING_SESSION'), null);
                }
                return cb(null, {result: {data: {success: true}}})
            });
        });
    };

    bl.getBySessionToken = function (req, cb) {
        var params = req.body.data;

        // TODO - we have to replace this with gl-params-validator module
        if (!params || !params.sessionToken) {
            return cb(app.errorsClient.getError(['SESSION_TOKEN_REQUIRED']), null);
        }

        app.mongoDB.models.Session.getBySessionToken(params.sessionToken, function (error, data) {
            if (error) {
                return cb(app.errorsClient.getError(['ERROR_WHILE_RETRIEVING_SESSION']), null);
            }

            if (data) {
                if(data.sessionData && data.sessionData.inactiveMinutesBeforeSessionDies){
                    data.expireAt = app.moment().add(data.sessionData.inactiveMinutesBeforeSessionDies, EXTEND_SESSION_BY_DIMENSION);
                }else{
                    data.expireAt = app.moment().add(EXTEND_SESSION_BY_VALUE, EXTEND_SESSION_BY_DIMENSION);
                }

                data.save(function (saveError) {});
            }

            cb(null, {result: {data: data}});
        });
    };

    bl.getByUserToken = function (req, cb) {
        var params = req.body.data;

        // TODO - we have to replace this with gl-params-validator module
        if (!params || !params.userToken) {
            return cb(app.errorsClient.getError(['USER_TOKEN_REQUIRED']), null);
        }

        app.mongoDB.models.Session.getByUserToken(params.userToken, function (error, data) {
            if (error) {
                return cb(app.errorsClient.getError(['ERROR_WHILE_RETRIEVING_SESSION']), null);
            }

            if (data) {
                if(data.sessionData && data.sessionData.inactiveMinutesBeforeSessionDies){
                    data.expireAt = app.moment().add(data.sessionData.inactiveMinutesBeforeSessionDies, EXTEND_SESSION_BY_DIMENSION);
                }else{
                    data.expireAt = app.moment().add(EXTEND_SESSION_BY_VALUE, EXTEND_SESSION_BY_DIMENSION);
                }

                data.save(function (saveError) {});
            }

            cb(null, {result: {data: data}});
        });
    };

    bl.deleteBySessionToken = function (req, cb) {
        var params = req.body.data;

        // TODO - we have to replace this with gl-params-validator module
        if (!params || !params.sessionToken) {
            return cb(app.errorsClient.getError(['SESSION_TOKEN_REQUIRED']), null);
        }

        app.mongoDB.models.Session.getBySessionToken(params.sessionToken, function (retrieveError, data) {
            if (retrieveError) {
                return cb(app.errorsClient.getError(['ERROR_WHILE_RETRIEVING_SESSION']), null);
            }

            if (!data) {
                return cb(null, {result: {data: {success: true}}});
            }

            app.mongoDB.models.Session.remove({_id: data._id}, function (deleteError) {
                if (deleteError) {
                    return cb(app.errorsClient.getError('ERROR_WHILE_DELETING_SESSION'), null);
                }
                return cb(null, {result: {data: {success: true}}});
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
