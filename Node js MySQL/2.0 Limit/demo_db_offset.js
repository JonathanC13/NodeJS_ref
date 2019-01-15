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
  // If you want to return five records, starting from the third record, you can use the "OFFSET" keyword:
  var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});

// You can also use write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example above:
// var sql = "SELECT * FROM customers LIMIT 2, 5";
