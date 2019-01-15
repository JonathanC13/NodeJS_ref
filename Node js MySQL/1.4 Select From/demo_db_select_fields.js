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

    // The fields object
    // The third parameter of the callback function is an array containing information about each field in the result.
    console.log(fields);
    // As you can see from the result of the example above, the fields object is an array containing information about each field as an object.

    // To return e.g. the name of the second field, just refer to the second array item's name property:
    // Return the name of the second field:
    // console.log(fields[1].name);

  });

  // </Query db>
});
