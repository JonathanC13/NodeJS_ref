var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true); // get the parse the url
  var filename = "." + q.pathname; // get the pathname from the parsed data
  fs.readFile(filename, function(err, data) {
    if (err) { // throw error is anything goes wrong.
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
