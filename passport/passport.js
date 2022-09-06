const bcrypt = require('bcrypt')
const passport = require('passport')
const localstrategy = require('passport-local').Strategy
const signup = require('../model/signup')
const Cryptr = require('cryptr')
const cryptr = new Cryptr('placement_project')

module.exports = () => {
  console.log('ur  in  passport.js ')
  passport.serializeUser((user, done) => {
    console.log('inside serialize', user)
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    console.log('inside deserialize', id)
    signup.findById(id, (err, user) => {
      done(err, user)
    })
  })

  //passport stratergy
  passport.use(
    'local-login',
    new localstrategy((username, password, done) => {
      signup.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err)
        }
        if (!user) {
          console.log('this is in  passport file')
          return done(null, false, { message: 'Incorrect Username ' })
        }

        if (user.password == password) {
          return done(null, user)
        } else {
          bcrypt.compare(password, user.password, (err, res) => {
            if (err) {
              return done(err)
            }
            if (res == false) {
              return done(null, false, { message: 'Incorrect Password' })
            }
            return done(null, user)
          })
        }
      })
    })
  )
}
