const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sasi@19991120',
    database: 'book_reviews'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

module.exports = connection;
