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
  con.query("SELECT * FROM customers", function (err, result, fields) { // sql statement SELECT *  = will return all columns
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});
