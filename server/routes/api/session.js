module.exports = function (app) {

    /**
     * userToken: {require: true}
     * sessionToken: {require: true}
     * data: {require: true}
     * sessionActiveTime: {require: false}
     */
    app.router.post('/add-edit', function (req, res, next) {
        app.apiBL.session.addEdit(req, function(errors, data){
            errors ? next(errors) : res.json(data);
        });
    });

    /**
     * sessionToken: {require: true}
     */
    app.router.post('/get/by/session-token', function (req, res, next) {
        app.apiBL.session.getBySessionToken(req, function(errors, data){
            errors ? next(errors) : res.json(data);
        });
    });

    /**
     * userToken: {require: true}
     */
    app.router.post('/get/by/user-token', function (req, res, next) {
        app.apiBL.session.getByUserToken(req, function(errors, data){
            errors ? next(errors) : res.json(data);
        });
    });

    /**
     * sessionToken: {require: true}
     */
    app.router.post('/delete/by/session-token', function (req, res, next) {
        app.apiBL.session.deleteBySessionToken(req, function(errors, data){
            errors ? next(errors) : res.json(data);
        });
    });

    /**
     * userToken: {require: true}
     */
    app.router.post('/delete/by/user-token', function (req, res, next) {
        app.apiBL.session.deleteByUserToken(req, function(errors, data){
            errors ? next(errors) : res.json(data);
        });
    });

    /**
     * no params required
     */
    app.router.post('/delete/all', function (req, res, next) {
        app.apiBL.session.deleteAll(req, function(errors, data){
            errors ? next(errors) : res.json(data);
        });
    });

    return app.router;
};