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
  // You can delete records from an existing table by using the "DELETE FROM" statement:
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result, fields) { // sql statement SELECT name  = will return the name column
    if (err) throw err;
    console.log("Number of rows deleted: " + result.affectedRows);
  });

  // </Query db>
});

// The result object
/*
When executing a query, a result object is returned.

The result object contains information about how the query affected the table.

The result object returned from the example above looks like this:
{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

Access an attribute, for example: result.warningCount
*/
