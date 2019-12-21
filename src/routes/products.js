const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../api/sql')

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    connection.query('SELECT * FROM Product WHERE product_id = "'+req.params.id+'"' , function (err, result) {
        // if (err) throw err;
        console.log(result);
        if(result.length!==0){
            res.render(path.join(__dirname, '../../app/', 'products.html'),{
                layout: false,
                data: JSON.stringify(result[0])
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