var MongoClient = require('C:\\Users\\Jonathan\\Desktop\\NodeJs Tutorial\\node_modules\\mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("mydb"); // database name

  dbo.createCollection("Customers", function(err, res) {
    if(err) throw err;
    console.log("Collection created!");

    // close connection
    db.close();
  });
});

/*
Important: In MongoDB, a database is not created until it gets content!
MongoDB waits until you have created a collection (table), with at least one document (record) before it actually creates the database (and collection).
*/

// In mongo.exe command console.
//  When in mydb, use >> show collections << to show all collections in the current db
