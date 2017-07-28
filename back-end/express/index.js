var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var router = require('./controllers/EventController')();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3000;



app.use('/', router);

app.listen(port);
console.log('Magic happens on port ' + port);