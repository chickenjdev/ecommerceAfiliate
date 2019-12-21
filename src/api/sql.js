require('dotenv/config');
var mysql = require("mysql");
var con = mysql.createPool({
    host: process.env.SQLHOST,
    user: process.env.sqlUser,
    password: process.env.sqlPassword,
    database: process.env.databaseName
});
module.exports = con;