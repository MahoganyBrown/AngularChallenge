const express = require('express');

const app = express();
const MongoClient = require('mongodb');
//const { ppid } = require('process');

let db;
const port = 4100;

const uri = "mongodb+srv://MaUser:brown@cluster0.5e4zk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(uri, {useUnifiedTopology:true},function(err,client){
  if (err) throw err;
  console.log("Connected to MongoDB successfully");
  db = client.db("my-app");

})

app.listen(port,function(req,res) {
  console.log("listening at port: " + port);
})

app.get('/addBlog', function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post('/addBlog', function(req,res){
  db.collection('blogs').insertOne({
    title: "titleValue",
    content: "contentValue"
  },function(err,result){
    if(err) throw error;
    res.send("blog added successfully");
  })
})

//const router = express.Router();

//const { BlogPost } = require('../models/blogpost');

//router.get('/api/blogposts', (req, res) => {
  //BlogPost.find({}, (err, data) => {
    //if(!err) {
      //res.send(data);
    //} else {
        //console.log(err);
    //}
  //});
//});


//module.exports = router;
