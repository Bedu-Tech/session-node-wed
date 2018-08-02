var http = require('http');
var mysqlClient = require('./mysql');

var connection = mysqlClient.connection();

http.createServer(function (req, res) {
  connection.query("SELECT * FROM users", function (err, results, fields) {
    if (err) {
      throw err
    }

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    
    return res.end(JSON.stringify(results))
  })
}).listen(8080)