const Sequelize = require('sequelize');
// const url = require('./dbUrl');

const db = new Sequelize('postgres://kljnfvjk:8Zc5bRJG7ankDzCoN8tUzR-9v2cchGeS@stampy.db.elephantsql.com:5432/kljnfvjk', {
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