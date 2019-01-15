var http = require('http'); // dependency. Resolve path, Load, Wrap, Evaluate, and cache
var dt = require('./myfirstmodule'); // export made module.

// http.createServer() method is to create a server object and is executed when someone tries to access the webhost with the specified port. Ex http://localhost:8080
http.createServer(function (req,res) {
  // Write is to the html
  res.writeHead(200, {'Content-Type': 'text/plain'}); // HTTP header, status code 200 means OK and the second argument is an object containing the response headers
  res.write("The date and time are currently: " + dt.myDateTime()); // Write response to the client
  res.end('Hello World!'); //end the response, can have a message
}).listen(8080);
