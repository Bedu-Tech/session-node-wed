var mysql = require('mysql');

var connection = function () {
  return mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'example'
  });
};

module.exports = {
  connection
}