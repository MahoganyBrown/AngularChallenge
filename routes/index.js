const express = require('express');

const router = express.Router();

const { BlogPost } = require('../models/blogpost');

router.get('/api/blogposts', (req, res) => {
  BlogPost.find({}, (err, data) => {
    if(!err) {
      res.send(data);
    } else {
        console.log(err);
    }
  });
});


module.exports = router;
