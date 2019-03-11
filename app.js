var express = require('express');
var app = express();
var server = require('http').createServer(app);
var routes = require('./routes');

const hostname = '0.0.0.0';
const port = 3000;

app.set('view engine', 'pug')
app.use(express.static('public'));
app.use('/', routes);

server.listen(port, hostname, () => {
    var message = "Server running at port 3000"
    console.log(message);
});
