var http = require('http'); // dependency. Resolve path, Load, Wrap, Evaluate, and cache
var url = require('url'); // module to work on the query string

// http.createServer() method is to create a server object and is executed when someone tries to access the webhost with the specified port. Ex http://localhost:8080
http.createServer(function (req,res) { // The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
  res.writeHead(200, {'Content-Type': 'text/html'}); // HTTP header, status code 200 means OK and the second argument is an object containing the response headers
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt); // Write response to the client
  res.end(' [end]'); //end the response, can have a message
}).listen(8080);

// web request url: http://localhost:8080/?year=2017&month=July
