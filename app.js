const express = require('express');


const app = express();
const dotenv = require('dotenv')

//app.get('/', (req,res) => {
  //res.send("Blog");

//});

//app.get('blogposts', (req, res) => {
  //res.send('Blogposts');

//});

const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env'});

connectDB();

app.use('/', require('./routes/index'));

app.listen(3000);
