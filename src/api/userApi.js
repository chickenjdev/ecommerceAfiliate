const express = require('express');
const router = express.Router();
const connection = require('./sql');



router.post('/createAccount', (req, res, next) => {
    let sql = `INSERT INTO User(user_id,password,name) VALUES ?`;
    var data = req.body;
    var value = [
        [data.user_id, data.password, data.name]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: 'User id existed'
            })
        } else if (result) {
            console.log('user create successfully');
            res.json({
                code: '201',
                user_id: req.body.user_id
            })
        }
    })
})

router.post('/login', (req, res, next) => {
    let sql = `SELECT * FROM User WHERE (user_id,password) = ? `;
    var data = req.body;
    var value = [
        [data.user_id, data.password]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: 'can not connect to server'
            })
        } else if (result) {
            if (result.length !== 0) {
                console.log('user login successfully');
                var userSess = JSON.parse(JSON.stringify(result))[0].user_id
                req.session.user = userSess + '';
                res.cookie("login", 1);
                res.cookie("user", JSON.parse(JSON.stringify(result))[0].name)
                res.cookie("userx", JSON.parse(JSON.stringify(result))[0].user_id)

                res.json({
                    code: '210',
                    user_id: req.body.user_id
                })
            } else {
                res.json({
                    code: '400',
                    error: 'User name or password Incorrect'
                })
            }
        }
    })
})
router.get('/logout',(req,res,next) => {
    res.clearCookie('user_sid');
    res.cookie("login", 0);
    res.cookie("user", '');
    res.cookie("userx", '');
    res.redirect("/login");
})
router.post('/add-address', (req, res, next) => {

    var sql1 = `UPDATE Address SET full_name = ?, address1 = ?,address2 = ?, city = ?, phone = ?  WHERE user_id="`+req.session.user+`"`
    let sql2 = `INSERT INTO Address(ID,address_id,user_id,full_name,address1,address2,postal_code,city,phone) VALUES ?`;
    // var data = req.body;
    // console.log(req.body);
    var ID = req.body.ID;
    var address_id = 1;
    var user_id = req.session.user;
    var full_name = req.body.full_name;
    var address1 = req.body.address1;
    var address2 = req.body.address2;
    var postal_code = "";
    var city = req.body.city;
    var phone = req.body.phone;

    console.log(req.body);
    var value1 = [
        [full_name, address1, address2, city, phone]
    ]
    connection.query(sql1, [value1], (err, result) => {
        if (err) {
            console.log(err)
            var value2 = [
                [ID,address_id,user_id,full_name, address1, address2,postal_code ,city, phone]
            ]
            connection.query(sql2, [value2], (err, result) => {
                if (err) {
                    console.log(err)
                } else if (result) {
                    console.log('Insert Address successfully');
                }
            })

        } else if (result) {
            console.log('Change Address successfully');
            res.json({
                code: '201',
                message: "success!"
            })
        }
    })

})




module.exports = router;