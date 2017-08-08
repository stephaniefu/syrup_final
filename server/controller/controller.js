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
    console.log('url is: ', req.url); // /profile/1
    res.send(data[2]);
  }
};