const express = require('express');
const router = express.Router();
const connection = require('./sql');

router.post('/add-product', (req, res, next) => {

    let sql = `INSERT INTO Product(product_id,category_id,branch_id,name,description,general_info,price,src_image) VALUES ?`;
    var product_id = req.body.product_id;
    var category_id = req.body.category_id;
    var branch_id = req.body.branch_id;
    var name = req.body.name;
    var description = req.body.description;
    var general_info = req.body.general_info;
    var price = req.body.price;
    var src_image = req.body.src_image;

    console.log(product_id, category_id, branch_id, name, description, general_info, price, src_image);
    var value = [
        [product_id, category_id, branch_id, name, description, general_info, price, src_image]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: "Errors! Dont add product!"
            })
        } else if (result) {
            console.log('Add to Cart is successfully');
            res.json({
                code: '201',

            })
        }
    })

})

router.post('/add-category', (req, res, next) => {

    let sql = `INSERT INTO Category(category_id,name) VALUES ?`;
    var category_id = req.body.category_id;
    var name = req.body.name;

    console.log(category_id, name);
    var value = [
        [category_id, name]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: "Errors! Dont add Categoty!"
            })
        } else if (result) {
            console.log('Add to Category is successfully');
            res.json({
                code: '201',

            })
        }
    })

})


router.post('/add-branch', (req, res, next) => {

    let sql = `INSERT INTO Branch(branch_id,name) VALUES ?`;
    var branch_id = req.body.branch_id;
    var name = req.body.name;

    console.log(branch_id, name);
    var value = [
        [branch_id, name]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: err
            })
        } else if (result) {
            console.log('Add to Branch is successfully');
            res.json({
                code: '201',
                message: "Success!"

            })
        }
    })

})

router.post('/add-product-detail', (req, res, next) => {

    let sql = `INSERT INTO ProductDetail(product_detail_id,product_id,size,color,option1,option2,option3,bonus,src_image) VALUES ?`;
    var product_detail_id = req.body.product_detail_id;
    var product_id = req.body.product_id;
    var size = req.body.size;
    var color = req.body.color;
    var option1 = req.body.option1;
    var option2 = req.body.option2;
    var option3 = req.body.option3;
    var bonus = req.body.bonus;
    var src_image = req.body.src_image;


    var value = [
        [product_detail_id, product_id, size, color, option1, option2, option3, bonus, src_image]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: err
            })
        } else if (result) {
            console.log('Add to Product detail is successfully');
            res.json({
                code: '201',
                message: "Success!"

            })
        }
    })

})

router.post('/cart-to-cart', (req, res, next) => {

    let sql = `INSERT INTO Cart(user_id,product_detail_id,quant,status) VALUES ?`;
    // var data = req.body;
    // console.log(req.body);
    var product_detail_id = req.body.product_detail_id;
    var user_id = req.body.user_id;
    var quant= req.body.quant;
    console.log(product_detail_id, user_id,quant);
    var value = [
        [user_id, product_detail_id,quant,0]
    ]
    connection.query(sql, [value], (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: "Don't add to Cart"
            })
        } else if (result) {
            console.log('Add to Cart is successfully');
            res.json({
                code: '201',
            })
        }
    })

})

router.post('/cart-remove-item', (req, res, next) => {

    var product_detail_id = req.body.product_detail_id;
    let sql = `DELETE FROM Cart WHERE 
                user_id = "`+req.session.user+`"
                AND product_detail_id="`+product_detail_id+`"`;
    // var data = req.body;
    // console.log(req.body);
    console.log(product_detail_id, req.session.user);

    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            res.json({
                code: '400',
                error: "cannot Remove item"
            })
        } else if (result) {
            console.log('remove item successfully');
            res.json({
                code: '201',
            })
        }
    })

})
module.exports = router;