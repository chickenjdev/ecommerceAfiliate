const express = require('express');

const router = express.Router();

const path = require('path');

var data= [
    {id:1},
    {id:2},
    {id:3}
]
var jsonData = JSON.stringify(data);

router.get('/', (req, res, next) => {
    // console.log(req.params.id);
    // res.sendFile( path.join(__dirname, '../../app/', 'signUp.html'));
    res.render(path.join(__dirname, '../../app/', 'signUp.html'),{
        layout: false,
        test: 'toi dday',
        quote: 'ss',
        data : jsonData
        
    });
    // res.render('view/products', {test : req.params.id});
})

module.exports = router;