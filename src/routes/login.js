const express = require('express');

const router = express.Router();

const path = require('path');

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        console.log('ban da dang nhap - Redirect')
        res.redirect('/');
    } else {
        next();
    }    
};

router.get('/',sessionChecker, (req, res, next) => {
    res.sendFile( path.join(__dirname, '../../app/', 'login.html'));
})

module.exports = router;