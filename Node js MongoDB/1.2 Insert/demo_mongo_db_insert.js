var MongoClient = require('C:\\Users\\Jonathan\\Desktop\\NodeJs Tutorial\\node_modules\\mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*
To insert a record, or document as it is called in MongoDB, into a collection, we use the insertOne() method.

A document in MongoDB is the same as a record in MySQL

The first parameter of the insertOne() method is an object containing the name(s) and value(s) of each field in the document you want to insert.

It also takes a callback function where you can work with any errors, or the result of the insertion:
*/

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb"); // database name

  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("Customers").insertOne(myobj, function(err, res) {
    if(err) throw err;
    console.log("1 document inserted");

    // close connection
    db.close();
  });
});

// Note: If you try to insert documents in a collection that do not exist, MongoDB will create the collection automatically.

// In Mongo.exe command console:
//  When in mydb, use db.Customers.find() to list objects in the collection, where in this case "customers" is the collection
