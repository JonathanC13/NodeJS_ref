var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*
Filter the Result

When finding documents in a collection, you can filter the result by using a query object.

The first argument of the find() method is a query object, and is used to limit the search.
Example

Find documents with the address "Park Lane 38":
*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

// in mongo.exe command console, the command is: >> db.Customers.find({ address: "Park Lane 38"})
