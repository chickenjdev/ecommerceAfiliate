const express = require('express');
const router = express.Router();
const connection = require('./sql');

router.post('/createAccount', (req, res, next) => {
    let sql = `INSERT INTO User(user_id,password,name) VALUES ?`;
    var data = req.body;
    var value = [
        [data.user_id,data.password,data.name]
    ]
    connection.query(sql,[value],(err,result) => {
        if(err) {
            console.log(err) 
            res.json({
                code : '400',
                error : 'User id existed'
            })
        }
        else if(result) {
            console.log('user create successfully');
            res.json({
                code: '201',
                user_id: req.body.user_id
            })
        }
    })
})

router.post('/login', (req, res, next) => {
    let sql = `SELECT * FROM User WHERE user_id = ? `;
    var data = req.body;
    var value = [
        [data.user_id,data.password]
    ]
    connection.query(sql,[value],(err,result) => {
        if(err) {
            console.log(err) 
            res.json({
                code : '400',
                error : 'User name or password Incorrect'
            })
        }
        else if(result) {
            console.log('user create successfully');
            res.json({
                code: '201',
                user_id: req.body.user_id
            })
        }
    })
})

module.exports = router;