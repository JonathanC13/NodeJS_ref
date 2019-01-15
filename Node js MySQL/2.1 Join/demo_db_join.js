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
  // INNER JOIN
  var sql = "SELECT customers.name, customers.address, favouritesnack.snack FROM customers INNER JOIN favouritesnack ON customers.name = favouritesnack.name";

  // Outer left join
  // var sql = "SELECT customers.name, customers.address, favouritesnack.snack FROM customers LEFT JOIN favouritesnack ON customers.name = favouritesnack.name";

  // Outer right join
  //var sql = "SELECT customers.name, customers.address, favouritesnack.snack FROM customers RIGHT JOIN favouritesnack ON customers.name = favouritesnack.name";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // </Query db>
});

//https://www.guru99.com/joins.html

// Pre work
// create a table that has a related column
/*
var sql = "CREATE TABLE FavouriteSnack (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), snack VARCHAR(255))";
con.query(sql, function (err, result) { // sql statement SELECT name  = will return the name column
  if (err) throw err;
  console.log("Table created");
});
*/

// Insert some information
/*
var sql = "INSERT INTO FavouriteSnack (name, snack) VALUES ?";
var values = [
  ['John', 'Apple'],
  ['Peter', 'Orange Juice'],
  ['Amy', 'Apple'],
  ['Hannah', 'Orange Juice'],
  ['Michael', 'Orange Juice'],
  ['Sandy', 'Apple'],
  ['Betty', 'Orange Juice'],
  ['Richard', 'Chocolate'],
  ['Susan', 'Chocolate'],
  ['Vicky', 'Apple'],
  ['Ben', 'Chocolate'],
  ['William', 'Chocolate'],
  ['Chuck', 'Orange Juice'],
  ['Viola', 'Apple']
];
con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});
*/

/*
// Select all to validate
con.query("SELECT * FROM FavouriteSnack", function (err, result, fields) { // sql statement SELECT *  = will return all columns
  if (err) throw err;
  console.log(result);
});
*/
