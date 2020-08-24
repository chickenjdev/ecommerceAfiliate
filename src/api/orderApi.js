const express = require('express');
const router = express.Router();
const connection = require('./sql');

router.post('/add-discount', (req, res, next) => {

    let sql = `INSERT INTO Discount(discount_id,discount,type) VALUES ?`;
    var discount_id = req.body.discount_id;
    var discount = req.body.discount;
    var type = req.body.type;
    var value = [
        [discount_id, discount, type]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: err
            })
        } else if (result) {
            console.log('Add to Discount is successfully');
            res.json({
                code: '201',
                message: "Success!"

            })
        }
    })

})


router.post('/add-order-detail', (req, res, next) => {

    let sql = `INSERT INTO OrderDetail(order_id,product_detail_id,quantity) VALUES ?`;
    var order_id = req.body.order_id;
    var product_detail_id = req.body.product_detail_id;
    var quantity = req.body.quantity;
    var value = [
        [order_id, product_detail_id, quantity]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: err
            })
        } else if (result) {
            console.log('Add to Order detail is successfully');
            res.json({
                code: '201',
                message: "Success!"

            })
        }
    })

})


router.post('/add-order', (req, res, next) => {

    let sql = `INSERT INTO Orders(order_id,user_id,address_id,created,status_code,discount_id,total) VALUES ?`;
    var order_id = req.body.order_id;
    var user_id = req.session.user;
    var address_id = req.body.address_id;
    var created = req.body.created;
    var status_code = req.body.status_code;
    var discount_id = req.body.discount_id;
    var total = req.body.total;
    console.log(req.body);
    var value = [
        [order_id, user_id, address_id, created, status_code, discount_id, total]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: err
            })
        } else if (result) {
            for (var i = 0; i < req.body.order_detail.length; i++) {
                let sql = `INSERT INTO OrderDetail(order_id,product_detail_id,quantity) VALUES ?`;
                var order_id = req.body.order_detail[i].order_id;
                var product_detail_id = req.body.order_detail[i].product_detail_id;
                var quantity = req.body.order_detail[i].quantity;
                var value = [
                    [order_id, product_detail_id, quantity]
                ]
                connection.query(sql, [value], (err, result) => {
                    if (err) {
                        console.log(err)
                    }else console.log(result)
                })
            }

            let sql3 = `DELETE FROM Cart WHERE user_id = '`+req.session.user+`'`;
            connection.query(sql3, [value], (err, result) => {
                if (err) {
                    console.log(err)
                }else console.log(result)
            })

            console.log('Add to Order is successfully');
            res.json({
                code: '201',
                message: "Success!"

            })
        }
    })

    

})



module.exports = router;