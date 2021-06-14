const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cv-generator'
});

db.connect( (err) => {
  if (err) {
    console.log('Error connecting to DB!');
    return;
  }
  console.log('Connected to database');
})

module.exports = db;