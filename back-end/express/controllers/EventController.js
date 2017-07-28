var express = require('express');

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'evento'
});

module.exports = function() {
  var router = express.Router();

  router.get('/events', function(req, res) {

    connection.query('SELECT * from events', function(err, rows, fields) {
      if (!err) {
        res.setHeader('Content-Type', 'application/json');
        res.json({ "events": rows });
      } else
        console.log('Error while performing Query.');
    });
  });

  router.post('/events/create', function(req, res) {

    connection.query('INSERT INTO events SET ?', req.body,
      function(err, result) {
        if (err) throw err;

        connection.query('SELECT * from events', function(err, rows, fields) {
          if (!err) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ "events": rows });
          } else
            console.log('Error while performing Query.');
        });
      }
    );
  });

  return router;
};