var express = require('express');
var router = express.Router();
var db = require('../bin/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  //var collection = db.get()
  var collection = db.get().collection("users");

  collection.find().toArray(function(err, users) {
    res.send(users);
  })
  //res.send('Hello Worlds');
});

router.get('/register',function(req, res, next){
  var collection = db.get().collection("users");
  var document = {name:"David", title:"About MongoDB"};
  collection.insertOne(document, {w: 1}, function(err, records){
    res.send('Inserted');
  });
});

module.exports = router;
