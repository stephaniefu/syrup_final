const Sequelize = require('sequelize');
// const db_URL = require('dotenv').config();

const db = new Sequelize('postgres://kopordan:93HHSxj-wO4nxzS3P1NANXGrdmtT0Whd@stampy.db.elephantsql.com:5432/kopordan');


db.authenticate()
  .then(() => 
    console.log('Successfully connected to DB')
  )
  .catch(err => 
    console.log('Could not connect to DB', err)
  )

module.exports = db;