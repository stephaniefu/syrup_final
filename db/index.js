const Sequelize = require('sequelize');
<<<<<<< HEAD
// const db_URL = require('dotenv').config();

const db = new Sequelize('postgres://kopordan:93HHSxj-wO4nxzS3P1NANXGrdmtT0Whd@stampy.db.elephantsql.com:5432/kopordan', {
  pool: {
    max: 3,
    min: 0,
    idle: 10000
  },
});

=======
const url = require('../dbUrl');

const db = new Sequelize(url);
>>>>>>> origin

db.authenticate()
  .then(() => 
    console.log('Successfully connected to DB')
  )
  .catch(err => 
    console.log('Could not connect to DB', err)
  )

module.exports = db;