const route = require('express').Router()

route.get('/dashboard', (req, res) => {
  res.send('this is dashboard')
})

module.exports = route
