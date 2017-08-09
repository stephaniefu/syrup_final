const router = require('express').Router();
const controller = require('../controller/controller');

// //Submiting a Face Photo 
// router.post('/upload', controller.uploadPhoto);
//Connect with match
router.post('/match/1', controller.connectMatch);
// //Getting all Matches
// router.get('/matches', controller.getMatches);
// //Getting Matches by %
// router.get('/matches/percent', controller.getMatchesByPercent);
// //Getting Matches by recent
// router.get('/matches/recent', controller.getMatchesByRecent);
// //Add personal info
router.post('/profile', controller.addProfile);
// //Edit personali info
// router.put('/profile/:id', controller.editProfile);
// //Upload profile pic
// router.post('/profile/profilepic', controller.addProfilePic);
// //Upload photos of self
// router.post('/profile/photos', controller.addPhotos);
// //Getting individual messages
// router.get('/message/:id', controller.getMessageByUser);
// //Storing messages in DB
// router.post('/message/:id', controller.saveMessages);
// get individual profile
router.get('/profile/:id', controller.getProfile);


module.exports = router;