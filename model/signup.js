const mongoose = require('mongoose')
const schema = mongoose.Schema
const signup = new schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    type:{
        type:String
    }
    
})

const model = mongoose.model('users', signup)
module.exports = model