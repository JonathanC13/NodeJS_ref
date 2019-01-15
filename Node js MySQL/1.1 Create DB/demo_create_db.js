var mysql = require('C:\\Users\\Jonathan\\Desktop\\NodeJs Tutorial\\node_modules\\mysql');
// <Create connection>
var con = mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  // <Query db>
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Datebase created.");
  });
  // </Query db>
});
// </Create connection>
