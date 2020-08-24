const express = require('express');

const router = express.Router();

const path = require('path');
const connection = require('../api/sql')

var sessionChecker = (req, res, next) => {
    if (!req.session.user && !req.cookies.user_sid) {
        res.redirect('/login');
    } else {
        next();
    }    
};

router.get('/',sessionChecker ,(req, res, next) => {
    var sql =`  SELECT Cart.product_detail_id, Cart.quant, ProductDetail.product_id,
                        Product.name,ProductDetail.option1,ProductDetail.bonus,Product.price,
                        Product.src_image,(ProductDetail.bonus+Product.price) as sum
                FROM Cart,ProductDetail,Product
                WHERE Cart.product_detail_id = ProductDetail.product_detail_id 
                AND ProductDetail.product_id = Product.product_id
                AND Cart.user_id = "`+req.session.user+`"
                AND Cart.status = "0"`

    var sql2 = `SELECT * From Address WHERE user_id="`+req.session.user+`"`


    connection.query(sql , function (err, result1) {
        // console.log(result1);
        if(result1.length!==0){
            connection.query(sql2,function(err,result2){
                console.log(result2);
                res.render(path.join(__dirname, '../../app/', 'checkout.html'),{
                    layout: false,
                    data: JSON.stringify(result1),
                    userInfo : JSON.stringify(result2)
                });
            });
        }
        else{
            res.render(path.join(__dirname, '../../app/', 'checkout.html'),{
                layout: false
                
            });
        }
    });
    // res.sendFile( path.join(__dirname, '../../app/', 'checkout.html'));
    // res.render('view/products', {test : req.params.id});
})

module.exports = router;