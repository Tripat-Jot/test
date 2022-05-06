var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json({message: 'Welcome to App'});
  res.send('<p>Welcome to Azure by Tripatjot Singh</p>') ;
});

module.exports = router;
