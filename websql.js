// Open a WebSQL database
var db = openDatabase("mydb", "1.0", "My Database", 2 * 1024 * 1024);

// Create a table
db.transaction(function(tx) {
  tx.executeSql("CREATE TABLE IF NOT EXISTS greetings (id INTEGER PRIMARY KEY ASC, message TEXT)");
});

// Insert data into the table
db.transaction(function(tx) {
  tx.executeSql("INSERT INTO greetings (message) VALUES (?)", ["Hello World!"]);
});

// Retrieve data from the table and display it on the page
db.transaction(function(tx) {
  tx.executeSql("SELECT * FROM greetings", [], function(tx, result) {
    var output = document.getElementById("output");
    var message = result.rows.item(0).message;
    output.innerHTML = message;
  });
});
