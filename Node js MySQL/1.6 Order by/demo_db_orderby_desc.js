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
  // Sort the result
  // Use the ORDER BY statement to sort the result in ascending or descending order.
  // The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.
  // Descending order
  con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result, fields) { // sql statement SELECT name  = will return the name column
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});
