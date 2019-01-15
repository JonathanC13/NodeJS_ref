var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*
The second parameter of the find() method is the projection object that describes which fields to include in the result.

This parameter is optional, and if omitted, all fields will be included in the result.
Example

Return the fields "name" and "address" of all documents in the customers collection:
*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");


  // alternative: dbo.collection("customers").find({}, { projection: { _id: 0 }
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

// In mongo.exe command console the command is: >> db.Customers.find({}, {_id: 0, name: 1, address: 1 })

// Result only shows the name and address of each record
/*
The Result Object

As you can see from the result of the example above, the result can be converted into an array containing each document as an object.

To return e.g. the address of the third document, just refer to the third array object's address property:
Example

Return the address of the third document:
console.log(result[2].address);

*/

/*
You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field). If you specify a field with the value 0, all other fields get the value 1, and vice versa:
This example will exclude "address" from the result:

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



To exclude the _id field, you must set its value to 0:
Example

This example will return only the "name" field:
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


You get an error if you specify both 0 and 1 values in the same object (except if one of the fields is the _id field):
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/
