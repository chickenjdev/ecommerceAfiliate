const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/', (req, res, next) => {
    // console.log(req.params.id);
    res.sendFile( path.join(__dirname, '../../app/', 'login.html'));
    // res.render('view/products', {test : req.params.id});
})

module.exports = router;