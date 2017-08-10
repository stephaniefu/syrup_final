const Sequelize = require('sequelize');
const express = require('express');
const Model = require('../../db/models/model');
const data = require('../../data');

module.exports = {
  addProfile: (req, res) => {
    Model.User.create({
      firstname: req.body.firstname,
      age: req.body.age,
      gender: req.body.gender,
      bio: req.body.bio,
      profilepic: req.body.profilepic,
      images: req.body.images
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
  }
};