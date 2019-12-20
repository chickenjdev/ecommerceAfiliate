const express = require('express');

const router = express.Router();

const path = require('path');

var data= [
    {
        id:'1u232df33431',
        name : '1 Điện Thoại Xiaomi Mi 9 Lite (Mi CC9 Global Version)',
        sku : '6176903101749',
        category : 'phone',
        branch : 'xiaomi'
        
    },
    {
        id:'1u232df33431',
        name : '2 Điện Thoại Xiaomi Mi 9 Lite (Mi CC9 Global Version)',
        sku : '6176903101749',
        category : 'phone',
        branch : 'xiaomi'
        
    },{
        id:'1u232df33431',
        name : '3 Điện Thoại Xiaomi Mi 9 Lite (Mi CC9 Global Version)',
        sku : '6176903101749',
        category : 'phone',
        branch : 'xiaomi'
        
    },{
        id:'1u232df33431',
        name : '4 Điện Thoại Xiaomi Mi 9 Lite (Mi CC9 Global Version)',
        sku : '6176903101749',
        category : 'phone',
        branch : 'xiaomi'
        
    },{
        id:'1u232df33431',
        name : '5 Điện Thoại Xiaomi Mi 9 Lite (Mi CC9 Global Version)',
        sku : '6176903101749',
        category : 'phone',
        branch : 'xiaomi'
        
    },{
        id:'1u232df33431',
        name : 'Điện Thoại Xiaomi Mi 9 Lite (Mi CC9 Global Version)',
        sku : '6176903101749',
        category : 'phone',
        branch : 'xiaomi'
        
    }

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