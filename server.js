var express = require('express');
var orm = require('./config/orm.js');
var exhbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exhbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

orm.selectAll('Impossible Burger');