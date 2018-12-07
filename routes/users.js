var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello Worlds');
});

router.get('register',function(req, res, next){
  res.send('I will be register your data in MongoDB');
});

module.exports = router;
