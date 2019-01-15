// The Node.js file system module allows you to work with the file system on your computer.
/*
Common use for the File System module:

    Read files
    Create files
    Update files
    Delete files
    Rename files

*/

var fs = require('fs'); // include File System module.
var http = require('http');

/* <Create Files>

    fs.appendFile()
    fs.open()
    fs.writeFile()
*/
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
/*
fs.appendFile('./mynewfile1.txt', 'Hello content!', function (err) { // the path without the "./" is the directory where node js is stored
  if (err) throw err;
  console.log('Saved!\n');

});
*/
/*The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
fs.open('./mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
*/

/* The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
*/
// </Create Files>

/* <Update Files>

  fs.appendFile()
  fs.writeFile()
*/
// The fs.appendFile() method appends the specified content at the end of the specified file:
/*
fs.appendFile('./mynewfile1.txt', ' This is my added text.', function (err) {
  if (err) throw err;
  console.log('Updated!');

});
*/

/* The fs.writeFile() method replaces the specified file and content:
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
*/
// </Update Files>

/* <Delete Files>
To delete a file with the File System module,  use the fs.unlink() method.
*/

//The fs.unlink() method deletes the specified file:
/*
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
*/
// <\Delete Files>

/* <Rename Files>

To rename a file with the File System module,  use the fs.rename() method.
*/
// The fs.rename() method renames the specified file:

/*
fs.rename('./mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');

});
*/

// </Rename Files>

fs.appendFile('./mynewfile1.txt', 'Hello content!', function (err) { // the path without the "./" is the directory where node js is stored
  if (err) throw err;
  console.log('Saved!\n');

  fs.appendFile('./mynewfile1.txt', ' This is my added text.', function (err) {
    if (err) throw err;
    console.log('Updated!');

  });
    fs.rename('./mynewfile1.txt', 'myrenamedfile.txt', function (err) {
      if (err) throw err;
      console.log('File Renamed!');


  });

});

// Chain so they are executed in order and not asynchonously causing out of order.

http.createServer(function (req, res) {
  fs.readFile('./demofile1.html', function(err, data) { // demofile1 is in the same folder
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

// request access with url: http://localhost:8080
