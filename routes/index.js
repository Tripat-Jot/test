var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json({message: 'Welcome to App'});
  res.send('<p><h2>Welcome to Azure by Tripatjot Singh </h2></p> <p><a href="/quotes"> Data Extracted from Stored Procedure </a></p>') ;
});

module.exports = router;
