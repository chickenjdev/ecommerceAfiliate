const express = require('express');
const router = express.Router();

const userApi = require('./userApi');
const productApi = require('./productApi');
const orderApi = require('./orderApi');


router.use('/user', userApi);
router.use('/product', productApi);
router.use('/order', orderApi);


router.post('/createAccount', (req, res, next) => {

})

module.exports = router;