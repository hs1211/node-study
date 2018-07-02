var express = require('express');
var router = express.Router();

const mongo = require('./util/mongo');

/* GET users listing. */
router.get('/', function(req, res, next) {

  console.log('root path');
  mongo.open();
  res.send('respond with a resource');
});

module.exports = router;
