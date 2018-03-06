'use strict';

module.exports = function (app) {

    var router = require('express').Router();

    /**
     * userToken: {require: true}
     * sessionToken: {require: true}
     * data: {require: true}
     * sessionActiveTime: {require: false}
     */
    router.post(
        '/add-edit',
        app.zValidator.check(app.zValidator.api.session.addEdit),
        function (req, res, next) {
            app.zService.api.session.addEdit(req, function (errors, data) {
                errors ? next(errors) : res.json(data);
            });
        });

    /**
     * sessionToken: {require: true}
     */
    router.post(
        '/get/by/session-token',
        function (req, res, next) {
            app.zService.api.session.getBySessionToken(req, function (errors, data) {
                errors ? next(errors) : res.json(data);
            });
        });

    /**
     * userToken: {require: true}
     */
    router.post(
        '/get/by/user-token',
        function (req, res, next) {
            app.zService.api.session.getByUserToken(req, function (errors, data) {
                errors ? next(errors) : res.json(data);
            });
        });

    /**
     * sessionToken: {require: true}
     */
    router.post(
        '/delete/by/session-token',
        function (req, res, next) {
            app.zService.api.session.deleteBySessionToken(req, function (errors, data) {
                errors ? next(errors) : res.json(data);
            });
        });

    /**
     * userToken: {require: true}
     */
    router.post(
        '/delete/by/user-token',
        function (req, res, next) {
            app.zService.api.session.deleteByUserToken(req, function (errors, data) {
                errors ? next(errors) : res.json(data);
            });
        });

    /**
     * no params required
     */
    router.post(
        '/delete/all',
        function (req, res, next) {
            app.zService.api.session.deleteAll(req, function (errors, data) {
                errors ? next(errors) : res.json(data);
            });
        });

    return router;
};