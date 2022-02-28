const mysql = require("mysql");
const dbConfig = require("../configs/db.config");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  post: dbConfig.POST,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;
