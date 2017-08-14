const Sequelize = require('sequelize');
const url = require('../dbUrl');
// const db_URL = require('dotenv').config();

const db = new Sequelize(url);

db.authenticate()
  .then(() => 
    console.log('Successfully connected to DB')
  )
  .catch(err => 
    console.log('Could not connect to DB', err)
  )

module.exports = db;