var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var mongo = require('mongoose');
var multer = require('multer');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var url = 'mongodb://localhost:27017/';
var db = mongo.connect('mongodb://localhost:27017/reviews', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to ' + db, '+ ', response);
    }
});
var app = express();
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200/feedbackform');
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200/admin');
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');

    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});
var Schema = mongo.Schema;
var UsersSchema = new Schema({
    userName:{type:String, required: true },
    contact:{type:String, required:true},
    rating:{type:Number, required:true},
    url:{type:String},
    feedback:{type:String},
    verified:{type:Boolean},
    date: {type: String}
}, {
    timestamps: true
});
var model = mongo.model('users', UsersSchema, 'users');
app.post('/api/saveReview', function(req,res){
    var mod = new model(req.body);
    MongoClient.connect(url, function(err, dbase) {
                    if (err) throw err;
                    var dbo = dbase.db("reviews");
                    var rev_obj = req.body ;
                    dbo.collection("Users").insertOne(rev_obj, function(err, res) {
                      if (err) throw err;
                      else{
                        console.log("1 document inserted");

                      dbase.close();
                      }
                      
                    });
                  });
                res.send({data:"Review has been inserted..!!"});
});

app.delete("/api/reject", function(req, res){
    
MongoClient.connect(url, function(err, dbase) {
    if (err) throw err;
    var dbo = dbase.db("reviews");
    var myquery = { userName: req.body.userName, contact: req.body.contact };
    dbo.collection("Users").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      dbase.close();
    });
  });
  res.send('Review is rejected...!!');
})
var data = null;
app.get("/api/getReviews", function(req,res){
    MongoClient.connect(url, function(err, dbase) {
        if (err) throw err;
        var dbo = dbase.db("reviews");
        dbo.collection("Users").find({}).toArray(function(err, result) {
          if (err) throw err;
          data = result;
          res.send(data);
          dbase.close();
        });
      });
      
})
app.listen(8080, function(){
    console.log('Example app listening on port 8000!');
})