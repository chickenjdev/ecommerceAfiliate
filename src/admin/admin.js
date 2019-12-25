const express = require('express');
var ejs = require('ejs');

var app = express();

express().set('view engine', 'ejs');
express().use(ejs);

const router = express.Router();

const path = require('path');
// const addProduct = require('./addProduct');

// router.use('/add-product', addProduct);


router.post('/', (req, res, next) => {

})

router.get('/index', (req, res) => {
    // res.sendFile(path.join(__dirname, '../../app/', 'adminTemplate/index.ejs'));
    res.render('../../app/adminTemplate/index.ejs');

});
// router.get('/index', (req, res, next) => {
//     res.render('../../app/adminTemplate/index.html')
// })

module.exports = router;