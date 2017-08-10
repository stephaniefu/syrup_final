const Sequelize = require('sequelize');
const express = require('express');
const Model = require('../../db/models/model');
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
  }
};