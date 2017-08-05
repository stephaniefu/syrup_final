const Sequelize = require('sequelize');
const db = require('../index');

const User = db.define('user', {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  profilepic: {
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
  }
}, {
  timestamps: false
})

const Match = db.define('match', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
}, {
  timestamps: false
});

const Message = db.define('message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
})

User.belongsToMany(User, {as: 'recipient', through: Match, unique: false});
User.belongsToMany(User, {as: 'sender', through: Message, unique: false});

User.sync();
Match.sync();
Message.sync();

// User.sync({force: true});
// Match.sync({force: true});
// Message.sync({force: true});


module.exports = {
  User, 
  Match,
  Message
};