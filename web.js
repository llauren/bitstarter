var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(42);

buf = fs.readFileSync( 'bitstarter.html' );
html = buf.toString();

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
