const express = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');

const routeLogin = require('./src/routes/login');
const routeSignUp = require('./src/routes/signup');
const routeProducts = require('./src/routes/products');
const routeCheckout = require('./src/routes/checkout');
const routeSearch = require('./src/routes/search');
const app = express();

app.engine(
  "html",
  exphbs({
    extname: "html",
    layoutsDir: "./app"
  })
);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/app'));

app.use(express.static(__dirname + ''));

app.get('/', (req,res)=>{
    res.sendFile( __dirname +'/app/index.html');
});

app.use('/login',routeLogin);
app.use('/sign-up',routeSignUp);
app.use('/products', routeProducts);
app.use('/checkout', routeCheckout);
app.use('/search',routeSearch);

module.exports = app;