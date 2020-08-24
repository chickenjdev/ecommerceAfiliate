require('dotenv/config');
const http = require('http');

const app = require('./app');
var PORT = process.env.PORT ;

const server = http.createServer(app);

server.listen(PORT,process.env.HOST);
