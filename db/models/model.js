const Sequelize = require('sequelize');
const db = require('../index');
const data = require('../../data.json');

const User = db.define('user', {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  profilepic: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    // type: Sequelize.ARRAY,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
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

User.belongsToMany(User, {as: 'matchee', through: Match, unique: false});
User.belongsToMany(User, {as: 'recipient', through: Message, unique: false});

User.sync({force: true})
  .then(() => {
    console.log('User Table Created');
    return User.bulkCreate([
        {firstname: 'mitch', profilepic: 'data:image/jpeg;base64,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', images: [], bio: 'I am a big dummy user', gender: 'male', age: 25,},
        {firstname: 'bryan', profilepic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 22,},
        {firstname: 'steven', profilepic: 'https://images.pexels.com/photos/247917/pexels-photo-247917.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 23,},
        {firstname: 'bill', profilepic: 'https://images.pexels.com/photos/111738/pexels-photo-111738.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 24,},
        {firstname: 'stan', profilepic: 'https://images.pexels.com/photos/157842/bezel-hairstyle-man-mode-157842.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 25,},
        {firstname: 'chris', profilepic: 'https://images.pexels.com/photos/351317/pexels-photo-351317.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 26,},
        {firstname: 'larry', profilepic: 'https://images.pexels.com/photos/33698/model-modeling-pose-attractive.jpg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 27,},
        {firstname: 'patrick', profilepic: 'https://images.pexels.com/photos/544716/pexels-photo-544716.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 28,},
        {firstname: 'alice', profilepic: 'https://images.pexels.com/photos/355018/pexels-photo-355018.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 22,},
        {firstname: 'chanel', profilepic: 'https://images.pexels.com/photos/40503/woman-snow-winter-portrait-40503.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 23,},
        {firstname: 'karen', profilepic: 'https://images.pexels.com/photos/47346/portrait-blond-blondie-brunette-47346.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 24,},
        {firstname: 'jessica', profilepic: 'https://images.pexels.com/photos/220420/pexels-photo-220420.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 25,},
        {firstname: 'michelle', profilepic: 'https://images.pexels.com/photos/415298/pexels-photo-415298.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 26,},
        {firstname: 'tina', profilepic: 'https://images.pexels.com/photos/60682/pexels-photo-60682.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 27,},
        {firstname: 'melissa', profilepic: 'https://images.pexels.com/photos/413925/pexels-photo-413925.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 28,},
        {firstname: 'alyssa', profilepic: 'https://images.pexels.com/photos/59552/pexels-photo-59552.png?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 21,}
      ])
  })
Match.sync();
Message.sync();

// User.sync({force: true});
// Match.sync({force: true});
// Message.sync({force: true});

// SEED SCRIPT
// ==============================
// db.sync({ force: true })
// .then(() => {
//   return User.bulkCreate(data)
// })


module.exports = {
  User, 
  Match,
  Message
};