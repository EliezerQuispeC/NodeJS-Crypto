var crypto = require('crypto');
class User{
    constructor(email){
        this._user_email = email;
        this._user_hash = '';
        this._user_salt = '';
    }

    setPassword(password){
        this._user_salt = crypto.randomBytes(16).toString('hex');
        this._user_hash = crypto.pbkdf2Sync(password, this._user_salt, 1000, 64, 'sha512').toString('hex');
    }
}

module.exports = User;