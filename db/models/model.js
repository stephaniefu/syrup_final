const Sequelize = require('sequelize');
const db = require('../index');
const data = require('../../data.json');


const User = db.define('user', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: true
  },
  profilepic: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
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
Message.belongsTo(User, { as: 'user', through: Message, foreignKey: {name: 'userId', unique: false }})
Message.belongsTo(User, { as: 'recipient', through: Message, foreignKey: {name: 'recipientId', unique: false }})



// User.belongsToMany(User, {as: 'recipient', through: Message, unique: false});

// User.sync({force: true})
//   .then(() => {
//     console.log('User Table Created');
//     return User.bulkCreate([
//         {id: '2',firstname: 'bryan', email: 'asdf1@gmail.com', profilepic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 22,},
//         {id: '3',firstname: 'steven', email: 'asdf2@gmail.com', profilepic: 'https://images.pexels.com/photos/247917/pexels-photo-247917.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 23,},
//         {id: '4',firstname: 'bill', email: 'asdf3@gmail.com', profilepic: 'https://images.pexels.com/photos/111738/pexels-photo-111738.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 24,},
//         {id: '5',firstname: 'stan', email: 'asdf4@gmail.com', profilepic: 'https://images.pexels.com/photos/157842/bezel-hairstyle-man-mode-157842.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 25,},
//         {id: '6',firstname: 'chris', email: 'asd5f@gmail.com', profilepic: 'https://images.pexels.com/photos/351317/pexels-photo-351317.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 26,},
//         {id: '7',firstname: 'larry', email: 'asdf6@gmail.com', profilepic: 'https://images.pexels.com/photos/33698/model-modeling-pose-attractive.jpg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 27,},
//         {id: '8',firstname: 'patrick', email: 'asd7f@gmail.com', profilepic: 'https://images.pexels.com/photos/544716/pexels-photo-544716.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'male', age: 28,},
//         {id: '9',firstname: 'alice', email: 'asdf23@gmail.com', profilepic: 'https://images.pexels.com/photos/355018/pexels-photo-355018.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 22,},
//         {id: '10',firstname: 'chanel', email: 'asd34f@gmail.com', profilepic: 'https://images.pexels.com/photos/40503/woman-snow-winter-portrait-40503.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 23,},
//         {id: '11',firstname: 'karen', email: 'asd45f@gmail.com', profilepic: 'https://images.pexels.com/photos/47346/portrait-blond-blondie-brunette-47346.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 24,},
//         {id: '12',firstname: 'jessica', email: 'as34df@gmail.com', profilepic: 'https://images.pexels.com/photos/220420/pexels-photo-220420.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 25,},
//         {id: '13',firstname: 'michelle', email: 'as345df@gmail.com', profilepic: 'https://images.pexels.com/photos/415298/pexels-photo-415298.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 26,},
//         {id: '14',firstname: 'tina', email: 'asd345f@gmail.com', profilepic: 'https://images.pexels.com/photos/60682/pexels-photo-60682.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 27,},
//         {id: '15',firstname: 'melissa', email: 'asasdfdf@gmail.com', profilepic: 'https://images.pexels.com/photos/413925/pexels-photo-413925.jpeg?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 28,},
//         {id: '16',firstname: 'alyssa', email: 'asdasdffff@gmail.com', profilepic: 'https://images.pexels.com/photos/59552/pexels-photo-59552.png?h=350&auto=compress&cs=tinysrgb', images: [], bio: 'I am a big dummy user', gender: 'female', age: 21,}
//       ])
//    })
User.sync();
// User.sync({force: true});
Match.sync();
Message.sync();
// Message.sync({force: true});

// Match.sync({force: true})
//   .then(() => {
//     console.log('Match Table Created');
//     return Match.bulkCreate([
//         {id: '1', userId: '1', matcheeId: '2'},
//         {id: '2', userId: '1', matcheeId: '3'},
//         {id: '3', userId: '1', matcheeId: '4'},
//       ])
//   })

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