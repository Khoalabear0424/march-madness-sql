var express = require('express')
var mysql = require('mysql');
var app = express()

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'march_madness_db'
});

app.get('/conference', function (req, res) {
    connection.connect();
    connection.query('SELECT * FROM conference LIMIT 10', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results)
    });
    connection.end();
})

app.get('/stats', function (req, res) {
    connection.connect();
    connection.query('SELECT * FROM mmstats_2017 LIMIT 10', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results)
    });
    connection.end();
})

app.listen(3000)

