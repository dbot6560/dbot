const mysql = require('mysql2');
require('dotenv').config(); // load the .env file
const DATABASE = process.env.DATABASE;

const connection = mysql.createConnection(DATABASE);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

exports.connection = connection;


//const connection = require('models/DB').connection;
