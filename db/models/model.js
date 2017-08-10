const Sequelize = require('sequelize');
const db = require('../index');


const User = db.define('user', {
  nickname: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: true
  },
  profilepic: {
    type: Sequelize.STRING,
    allowNull: true
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: true
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: true
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true
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

User.belongsToMany(User, {as: 'matchee', through: Match, unique: false});
User.belongsToMany(User, {as: 'recipient', through: Message, unique: false});

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