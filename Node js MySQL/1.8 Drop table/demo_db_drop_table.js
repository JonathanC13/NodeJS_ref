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
  // Drop query
  //  var sql = "DROP TABLE customers";

  // If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the IF EXISTS keyword to avoid getting an error.
  //  var sql = "DROP TABLE IF EXISTS customers";

   var sql = "DROP TABLE IF EXISTS customerspk";
  con.query(sql, function (err, result, fields) { // sql statement SELECT name  = will return the name column
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});

// if table exists, the result object will look like:
/*
{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

If it does not exist:
{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 1,
  message: '',
  protocol41: true,
  changedRows: 0
}
*/
