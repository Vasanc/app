const route = require('express').Router()

route.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = route
