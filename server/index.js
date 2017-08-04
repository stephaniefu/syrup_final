const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('../db');
const model = require('../db/models/model');
//routes, model

const PORT = 8080;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded( {extended: true }));
app.use(morgan('dev'));
app.use(express.static('client'));

app.listen(PORT, err => {
  if (err) {
    console.log(`Could not connect to PORT ${PORT}`, err)
  } else {
    console.log(`Successfully connected to PORT ${PORT}`)
  }
});