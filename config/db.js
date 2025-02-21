// config/db.js
const mysql = require("mysql2/promise");

// Create a connection pool to reuse connections
const pool = mysql.createPool({
  // host: "localhost",       // Typically 'localhost' for XAMPP
  // user: "root",            // Default XAMPP user (adjust if needed)
  // password: "",            // Default XAMPP password (often empty)
  // database: "test_db",

  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,

  // database: process.env.DB_NAME,

  host: "b9qb2i6wcb7ru3fkp9ar-mysql.services.clever-cloud.com",
  user: "uftpi1lxgdbzjy4h",
  password: "mpvfUpf2ZYHGw9gR2j32",

  database: "b9qb2i6wcb7ru3fkp9ar",
  port: 3306,

});

module.exports = pool;
