const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const queries = require('./../modules/queries');
const crypt = require('./../modules/crypt');

const auth = passport.use(new BasicStrategy(
    async (userName, accessKey, callback) => {
        let user = await queries.getOne('users', {userName: userName}, ['apiKey']);
        if (!user) {
            return callback(null, false);
        }
        let isMatch = await crypt.verifyKey(accessKey, user.apiKey);
        if (!isMatch) {
            return callback(null, false);
        }
        return callback(null, user);
    }
));

const authenticate = {
    auth: auth.authenticate('basic', {session: false}),
};

module.exports = authenticate;
