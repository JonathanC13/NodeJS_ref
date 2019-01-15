var mysql = require('C:\\Users\\Jonathan\\Desktop\\NodeJs Tutorial\\node_modules\\mysql');
// <Create connection>
var con = mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar",
  database: "mydb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  // <Query db>
  con.query("SELECT name,address FROM customers", function (err, result, fields) { // sql statement SELECT name  = will return the name column
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});

// The result object
/*
As you can see from the result of the example above, the result object is an array containing each row as an object.

To return e.g. the address of the third record, just refer to the third array object's address property:
console.log(result[2].address);
*/
