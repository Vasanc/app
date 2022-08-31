const route = require('express').Router()
const users = require('../model/signup')

route.get('/signup', (req, res)=>{
    console.log('loading signup');
    res.render('signup')
})

route.post('/signup',(req,res)=>{
    users.findOne({username:req.body.username})
    .then((result)=>{
        if(!result)
            console.log(req.body)
        res.send('abc')
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = route