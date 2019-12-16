const express = require('express');
const app = express();

const routeProducts = require('./src/routes/products');
const routeCheckout = require('./src/routes/checkout');

app.use(express.static(__dirname + ''));

app.get('/', (req,res)=>{
    res.sendFile( __dirname +'/app/index.html');
});

app.use('/products', routeProducts);
app.use('/checkout', routeCheckout);

module.exports = app;