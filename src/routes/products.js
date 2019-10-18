const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        hello : "hello"
    })
})

router.get('/phone',(req,res,next)=>{
    res.status(200).json({
        hello : "phone"
    })
})

module.exports = router;