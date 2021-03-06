const User = require('../models/Users');

class UserQuery{
    static createUser(name, email, password){
        let user = new User(name, email);
        user.setPassword(password);
        db.query('INSERT INTO t_users SET ?', [user], (err,res)=>{
            if(err){
                console.log(err);
                return 'error';
            }
            console.log(res);
            return 'exito';
        });
    }
}

var controller = {
    register: (req,res) => {
        let response = UserQuery.createUser(req.body.name, req.body.email, req.body.password);
        res.status(200).send(response);
    }
};

module.exports = controller;