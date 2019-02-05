var crypto = require('crypto');
class User{
    constructor(name, email){
        this.user_name = name;
        this.user_email = email;
        this.user_hash = '';
        this.user_salt = '';
    }

    setPassword(password){
        this.user_salt = crypto.randomBytes(16).toString('hex');
        this.user_hash = crypto.pbkdf2Sync(password, this.user_salt, 1000, 64, 'sha512').toString('hex');
    }
}

module.exports = User;