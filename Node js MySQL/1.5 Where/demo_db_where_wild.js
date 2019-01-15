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
  // When selecting records from a table, you can filter the selection by using the "WHERE" statement:
  // Use the '%' wildcard to represent zero, one or multiple characters:
  // This query selects the records where the address starts with the letter 'S'
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result, fields) { // sql statement SELECT name  = will return the name column
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});

// Escape Query values
/*
When query values are variables provided by the user, you should escape the values.

This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

The MySQL module has methods to escape query values:

Use mysql.escape()
var adr = 'Mountain 21'; // This is an input from the user
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

You can also use a ? as a placeholder for the values you want to escape.

In this case, the variable is sent as the second parameter in the query() method:
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});

// If you have multiple placeholders, the array contains multiple values, in that order:
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
*/
