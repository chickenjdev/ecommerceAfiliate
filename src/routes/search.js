const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../api/sql')

router.get('/:id', (req, res, next) => {
    console.log('phone route')
    connection.query('SELECT * FROM Product WHERE product_id = "p72234813"', function (err, result) {
        // if (err) throw err;
        res.render(path.join(__dirname, '../../app/', 'search.html'), {
            layout: false,
            data: JSON.stringify(result)
        });
    });
})

module.exports = router;