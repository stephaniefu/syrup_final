const Sequelize = require('sequelize');
// const url = require('./dbUrl');

const db = new Sequelize('postgres://meaitwrz:34GQuOgnOoH9SOciPrc6BVd0T33G7dls@babar.elephantsql.com:5432/meaitwrz', {
  pool: {
    max: 3,
    min: 0,
    idle: 10000
  },
});


db.authenticate()
  .then(() => 
    console.log('Successfully connected to DB')
  )
  .catch(err => 
    console.log('Could not connect to DB', err)
  )

module.exports = db;