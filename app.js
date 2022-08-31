const express = require('express')
const app = express()
app.set("view engine", "ejs")
app.use(express.static('views'))
app.use(express.static('assets'))


app.listen(6060,()=>
{
    console.log('app is listening');
})

const homepage = require('./controller/homepage')
app.use(homepage)