module.exports = function (app) {
    var mongoose = app.db.mongoose;

    var Mixed = mongoose.Schema.Types.Mixed;

    var Session = mongoose.Schema({
        sessionToken: {type: String, required: true, unique: true},
        userToken: {type: String, required: true},
        expireAt: {type: Date, index: { expireAfterSeconds: 0 }},
        sessionData: {type: Mixed, required: true},
        sessions: [{type: String}]
    });

    Session.statics.getBySessionToken = function (sessionToken, cb) {
        this.findOne({sessionToken: sessionToken}, cb)
    };

    Session.statics.getByUserToken = function (userToken, cb) {
        var me = this;
        me.find({userToken: userToken}, cb);
    };

    mongoose.model('Session', Session);
    app.db.models.Session = mongoose.model('Session');
};
