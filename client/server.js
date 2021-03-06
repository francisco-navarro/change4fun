var express = require('express');
var proxy = require('express-http-proxy');
var app = express();

var clientPort = process.env.NODEJS_PORT || 3001;
var clientIpAddress = process.env.NODEJS_IP || '127.0.0.1';

var serverPort = process.env.NODEJS_PORT || 3000;
var serverIpAddress = process.env.NODEJS_IP || '127.0.0.1';

app.listen(clientPort, clientIpAddress, function() {
   console.log('App started listening on port ' + clientPort);
});

app.use('/api', proxy(serverIpAddress, {
   forwardPath: function(req) {
      return require('url').parse(req.url).path;
   },
   port: serverPort
}));

app.use('/', express.static(__dirname));
app.use('/client/', express.static(__dirname));
console.log(__dirname + '/app/html');
app.use('/html/', express.static(__dirname + '/app/html'));