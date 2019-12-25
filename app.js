const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const session = require('express-session');


const routeLogin = require('./src/routes/login');
const routeSignUp = require('./src/routes/signup');
const routeProducts = require('./src/routes/products');
const routeCheckout = require('./src/routes/checkout');
const routeSearch = require('./src/routes/search');
const routeAddToCart = require('./src/routes/AddToCart');

const api = require('./src/api/api');
const admin = require('./src/admin/admin');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// clear cookie
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
        res.cookie("login", 0);
        res.cookie("user", '');
    }
    next();
});

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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
});

app.use('/login', routeLogin);
app.use('/sign-up', routeSignUp);
app.use('/products', routeProducts);
app.use('/checkout', routeCheckout);
app.use('/search', routeSearch);
app.use('/add-to-cart', routeAddToCart);


app.use('/api', api);
app.use('/admin', admin);



module.exports = app;