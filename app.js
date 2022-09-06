const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const localstrategy = require('passport-local').Strategy
const session = require('express-session')
const flash = require('connect-flash')
const MongoStore = require('connect-mongo')
require('dotenv').config()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(express.static('views'))
app.use(express.static('assets'))

mongoose
  .connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(process.env.PORT || 6060, () => {
      console.log('app is listening')
    })

    console.log('success')
  })
  .catch((err) => {
    console.log(err)
  })

require('./passport/passport')()
app.use(
  session({
    secret: 'app',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.db,
    }),
  })
)
//passport
app.use(passport.initialize())
app.use(passport.session())

const homepage = require('./controller/homepage')
app.use(homepage)

const signup = require('./controller/signup')
app.use(signup)

const login = require('./controller/login')
app.use(login)

const dashboard = require('./controller/dashboard')
app.use(dashboard)
