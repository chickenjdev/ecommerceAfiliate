const express = require('express');
const router = express.Router();

const userApi = require('./userApi');


router.use('/user',userApi);

router.post('/createAccount', (req, res, next) => {
    // console.log(req.body.email);
    // res.json({
    //     code: '110'
    // })
})

module.exports = router;