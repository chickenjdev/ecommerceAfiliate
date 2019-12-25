const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/cart-to-cart', (req, res, next) => {

    res.redirect('/')

})

module.exports = router;