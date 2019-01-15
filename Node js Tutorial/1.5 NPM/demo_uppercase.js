var http = require('http');
var uc = require('upper-case'); // include the recently installed package
// ./node_modules/

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("Hello World!"));
  res.end();
}).listen(8080);
