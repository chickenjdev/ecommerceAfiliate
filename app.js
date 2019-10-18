const express = require('express');
const app = express();

const routeProducts = require('./src/routes/products');

app.use(express.static(__dirname + ''));

app.get('/', (req,res)=>{
    res.sendFile( __dirname +'/app/index.html');
});

app.use('/products', routeProducts);

module.exports = app;