const Sequelize = require('sequelize');
const express = require('express');
const Model = require('../../db/models/model');
const data = require('../../data');

module.exports = {
  addProfile: (req, res) => {
    console.log('this is the req.body ', req.body)
    Model.User.findOrCreate({
      where: {id: req.body.id}, defaults: {
        id: req.body.id,
        email: req.body.email,
        firstname: req.body.firstname,
        age: req.body.age,
        gender: req.body.gender,
        bio: req.body.bio,
        profilepic: req.body.profilepic,
        images: req.body.images
      }
    })
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
    res.status(404).send(err)
  })
  },

  saveMessages: (req, res) => {
    Model.Message.create({
      text: req.body.text,
      userid: req.params.userid,
      recipientid: req.params.recipientid
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },

  getProfile: (req, res) => {
    Model.User.findById(req.params.id)
    .then(response => {
      res.send(response);
      //res.redirect(`/profile/${req.params.id}`);
    })
    .catch(err => { if (err) {console.error(err) } })
  },

  renderClickedProfile: (req, res) => {
    res.redirect(`/#/profile/${req.params.id}`);
    console.log('ThIus is the id: ', req.params.id);
  },

  connectMatch: (req, res) => {
    Model.Match.create({
      userId: 3,
      matcheeId: req.params.id,
    })
    .then(data => {
      res.status(201).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },

  verifyMatch: (req, res) => {
    Model.Match.findAll({
      where: {
        userId: 3,
        matcheeId: req.params.id
      }
    })
    .then(response => {
      if (response.length) {
        res.send('true')
      } else {
        res.send('false')
      }
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },

  getMatches: (req, res) => {
    Model.Match.findAll({
      where: { userId: req.params.userId },
      include:[{
        model: Model.User, as: 'matchee',
        // attributes: ['firstname']
      }]
    })
      .then(match => {
        res.status(202).send(match);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },
  uploadUserPhotos: (req, res) => {
    res.send('OK');
  }
}
