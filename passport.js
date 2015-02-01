var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    Login = require('./api/login/login.model.js'),
    LoginCtrl = require('./api/login/login.controller.js');

module.exports = function(app) {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      Login.findOne(app.db, { username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!LoginCtrl.validPassword(user, password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
}