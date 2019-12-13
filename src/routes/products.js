const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    res.sendFile( path.join(__dirname, '../../app/', 'products.html'), {test : req.params.id} );
    // res.render('view/products', {test : req.params.id});
})
router.get('/phone', (req, res, next) => {
    res.status(200).json({
        hello: "phone"
    })
})

module.exports = router;