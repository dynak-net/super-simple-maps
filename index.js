const mysql = require('mysql');
const express = require('express');
const config = require('./config.json');
const app = express();

const con = mysql.createConnection(config);

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM points", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	app.get('/points', function (req, res) {
	  res.send(result)
    })
  });
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});