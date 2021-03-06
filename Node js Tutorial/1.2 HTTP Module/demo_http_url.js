var http = require('http'); // dependency. Resolve path, Load, Wrap, Evaluate, and cache

// http.createServer() method is to create a server object and is executed when someone tries to access the webhost with the specified port. Ex http://localhost:8080
http.createServer(function (req,res) { // The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
  res.writeHead(200, {'Content-Type': 'text/html'}); // HTTP header, status code 200 means OK and the second argument is an object containing the response headers
  res.write("Appeneded url is " + req.url); // Write response to the client
  res.end(' end'); //end the response, can have a message
}).listen(8080);
