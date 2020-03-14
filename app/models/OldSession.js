module.exports = function (app) {
    var mongoose = app.mongoDB.mongoose;

    var Mixed = mongoose.Schema.Types.Mixed;

    var Session = mongoose.Schema({
        token: { type: String, required: true },
               	userAgent: { type: String },
                data: { type: mongoose.Schema.Types.Mixed, required: true },
                cookie: { type: mongoose.Schema.Types.Mixed, required: true },
                createdAt: { type: Date, default: Date.now },
                expiresAt: { type: Date, expires: 1, required: true }
    });

    Session.statics.getBySessionToken = function (sessionToken, cb) {
        this.findOne({token: sessionToken}, cb)
    };

    Session.statics.getByUserToken = function (userToken, cb) {
        var me = this;
        me.find({userToken: userToken}, cb);
    };

    mongoose.model('OldSession', Session);
    app.mongoDB.models.OldSession = mongoose.model('OldSession');
};
