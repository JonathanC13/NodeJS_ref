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

  // You can limit the number of records returned from the query, by using the "LIMIT" statement:
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});
