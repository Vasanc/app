const route = require('express').Router()

route.get('/',(req, res)=>{
    console.log('signup page')
    res.render('signup')
})

module.exports = route