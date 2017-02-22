var express = require('express');
var app = express();
var countryRouter = express.Router();

var CountryQuery = require('./db/CountryQuery');
var query = new CountryQuery();

countryRouter.get('/', function(req, res){
  query.all(function(countries){
    res.json(countries);
  });
});

module.exports = countryRouter;
