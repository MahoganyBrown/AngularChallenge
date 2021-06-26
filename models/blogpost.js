const { stringify } = require('@angular/compiler/src/util');
const mongoose = require('mongoose');

const BlogPosts = mongoose.model('BlogPosts', {
  title: {
    type:string,
    required: true
  },
  author: {
    type:string,
    required: true
  },
  content: {
    type:string,
    required:true
  },

});

module.exports = { BlogPost }
