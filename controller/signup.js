const route = require('express').Router()
const bcrypt = require('bcrypt')
const users = require('../model/signup')

route.get('/signup', (req, res) => {
  console.log('loading signup')
  res.render('signup')
})

route.post('/signup', (req, res) => {
  users
    .findOne({ username: req.body.username })
    .then((result) => {
      if (result) {
        console.log('Username already exists')
        res.send('failure')
      } else {
        const new_user = new users({
          username: req.body.username,
          password: hash,
          email: req.body.email,
          type: req.body.t,
        })
        new_user.save()
        res.send('success')
      }
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = route
