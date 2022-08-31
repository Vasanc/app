const route = require('express').Router()

route.get('/',(req, res)=>{
    console.log('in home page');
    res.send('this is home page')
})

module.exports = route