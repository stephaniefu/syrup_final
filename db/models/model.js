const Sequelize = require('sequelize');
const db = require('../index');

const User = db.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  faceimage: {
    type: Sequelize.STRING,
    allowNull: false
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  matches: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }
}, {
  timestamps: false
})

User.sync()

module.exports = User;