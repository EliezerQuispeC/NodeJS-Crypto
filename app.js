var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

//MySqlConn
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_node_1'
});
db.connect((err)=>{
    if (err){
        throw err;
    }
    console.log('Db on :3');
});
global.db = db;

//Routes
var route_auth = require('routes/Authentication');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((err, req, res, next)=>{
    if(err.name === 'UnauthorizedError'){
        res.status(401);
        res.json({"message": err.name + ": " + err.message})
    }
});

app.use(route_auth);

module.exports = app;