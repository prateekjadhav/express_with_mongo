var express = require('express');
var router = express.Router();
var db = require('../bin/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  var collection = db.get().collection("products");
  collection.find().toArray(function(err, products) {
    res.send(products);
  })
});

router.get('/list',function(req, res, next){
  var collection = db.get().collection("products");
  collection.find().toArray(function(err, products) {
    res.render('list',{'products':products,'myname':'prateek'});
  })
  
})

router.get('/add',function(req, res, next){
    //console.log(req);
    res.render('add',{});
})

router.post('/add',function(req, res, next){
  var collection = db.get().collection("products");
  var document = req.body;
  collection.insertOne(document, {w: 1}, function(err, records){
    res.send('Inserted');
  });
})


module.exports = router;
