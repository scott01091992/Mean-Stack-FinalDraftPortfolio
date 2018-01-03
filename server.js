//modules
var express = require('express');
mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,'./client')));

app.use(bodyParser.json());

app.listen(6789, function(){
 console.log("listening on port 6789");
});
