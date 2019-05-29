const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require ('body-parser');

const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true}))
require('./routes/master')(app, {});
app.use(bodyParser)
app.listen(port, () => {
  console.log('We are live on ', port);
})

