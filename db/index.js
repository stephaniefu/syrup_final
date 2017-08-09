const Sequelize = require('sequelize');
// const db_URL = require('dotenv').config();

const db = new Sequelize('postgres://meaitwrz:34GQuOgnOoH9SOciPrc6BVd0T33G7dls@babar.elephantsql.com:5432/meaitwrz');


db.authenticate()
  .then(() => 
    console.log('Successfully connected to DB')
  )
  .catch(err => 
    console.log('Could not connect to DB', err)
  )

module.exports = db;