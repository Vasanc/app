const express = require('express')
const app = express()
const mongoose=require("mongoose")  
app.set("view engine", "ejs")
app.use(express.static('views'))
app.use(express.static('assets'))

const url = "mongodb+srv://vasan:vasan123@app.xjyvh0o.mongodb.net/?retryWrites=true&w=majority"; 

mongoose.connect( url,{useNewUrlParser: true,useUnifiedTopology: true})
    .then((res)=>{
        console.log('db connect')
    })
    .catch((err)=>{console.log(err)})



app.listen(6060,()=>
{
    console.log('app is listening');
})

const homepage = require('./controller/homepage')
app.use(homepage)

const signup = require('./controller/signup')
app.use(signup)