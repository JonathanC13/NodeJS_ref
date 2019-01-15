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
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result, fields) { // sql statement SELECT name  = will return the name column
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});
