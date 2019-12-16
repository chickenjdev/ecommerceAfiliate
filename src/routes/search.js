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
    res.render(path.join(__dirname, '../../app/', 'search.html'),{
        layout: false,
        test: 'toi dday',
        quote: 'ss',
        data : jsonData
        
    });
    console.log('phone route')
})

module.exports = router;