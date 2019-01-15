var mysql = require('C:\\Users\\Jonathan\\Desktop\\NodeJs Tutorial\\node_modules\\mysql');

var sql = "Select * FROM table1";
// <Create connection>
var con = mysql.createConnection({
  host: "localhost",
  database: "floor",
  user: "foo",
  password: "bar"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  // <Query db>
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
  // </Query db>
});
// </Create connection>
