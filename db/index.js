const mysql = require('mysql2');

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

function dropIfExists() {
  connection.query(`DROP DATABASE IF EXISTS tech_blog_db`, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}

function create() {
  connection.query(`CREATE DATABASE tech_blog_db`, (err, results) => {
    if (err) throw err;
    console.log(results);
    process.exit(0);
  });
}

let createDatabase = async () => {
  await dropIfExists();
  console.log('DATABASE DROPPED');
  await create();
  console.log('DATABASE CREATED');
}

createDatabase();