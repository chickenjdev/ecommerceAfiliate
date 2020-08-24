const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../api/sql')

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    connection.query('SELECT * FROM Product WHERE product_id = "'+req.params.id+'"' , function (err, result1) {
        // if (err) throw err;
        // console.log(result1);
        if(result1.length!==0){
            connection.query('SELECT `product_detail_id`,`option1`,`bonus` FROM ProductDetail WHERE product_id = "'+req.params.id+'"' , function (err, result2) {
                // console.log(result2);
                var detail = [];
                for (let i = 0; i < result2.length; i++) {
                    detail.push(result2[i])
                }
                // console.log(JSON.stringify(detail))
                // console.log(JSON.stringify(result1[0]));
                res.render(path.join(__dirname, '../../app/', 'products.html'),{
                    layout: false,
                    data: JSON.stringify(result1[0]),
                    options : JSON.stringify(detail)
            });
            });
        }else
            res.redirect('../../')
    });
    // res.render('view/products', {test : req.params.id});
})
router.get('/phone/:id', (req, res, next) => {
    res.render(path.join(__dirname, '../../app/', 'search.html'), {
        layout: false,
        test: 'toi dday',
        quote: 'ss'
    });
    console.log('phone route')
})

module.exports = router;