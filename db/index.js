const Sequelize = require('sequelize');

const db = new Sequelize('postgres://bycpedzk:CXmQ8Y2FRI78ZAWxMFBx8LwgQ1E-NpNu@pellefant.db.elephantsql.com:5432/bycpedzk');


db.authenticate()
  .then(() => 
    console.log('Successfully connected to DB')
  )
  .catch(err => 
    console.log('Could not connect to DB', err)
  )

module.exports = db;