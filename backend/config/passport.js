require('dotenv').config()
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt
const opts = {}
const UserModel = require('./database')
const passport = require('passport')
const User = require('../models/user')

const GoogleStrategy = require('passport-google-oauth20').Strategy
const GitHubStrategy = require('passport-github2').Strategy

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'Random string'

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload._id }, function (err, user) {
      if (err) {
        return done(err, false)
      }
      if (user._id) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  })
)

// GOOGLE STRATEGY
// initialize GoogleStrategy passport
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, profile)
    }
  )
)

// GITHUB STRATEGY
// initialize GithubStrategy passport
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, profile)
    }
  )
)

passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((user, cb) => {
  cb(null, user)
})
