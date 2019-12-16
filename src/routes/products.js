const express = require('express');

const router = express.Router();

const path = require('path');

var data= [
    {id:1},
    {id:2},
    {id:3}
]
var jsonData = JSON.stringify(data);

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    res.render(path.join(__dirname, '../../app/', 'products.html'), 
    {
        layout: false,
        test: jsonData,
        quote: 'ss'
    });
    // res.render('view/products', {test : req.params.id});
})
router.get('/phone/:id', (req, res, next) => {
    res.render(path.join(__dirname, '../../app/', 'search.html'),{
        layout: false,
        test: 'toi dday',
        quote: 'ss'
    });
    console.log('phone route')
})

module.exports = router;