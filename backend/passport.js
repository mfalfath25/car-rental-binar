const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt
const opts = {}
const UserModel = require('./database')
const passport = require('passport')

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'Random string'

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    UserModel.findOne({ id: jwt_payload.id }, function (err, user) {
      if (err) {
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
        // or you could create a new account
      }
    })
  })
)

// require('dotenv').config()
// const JwtStrategy = require('passport-jwt').Strategy,
//   ExtractJwt = require('passport-jwt').ExtractJwt
// const opts = {}
// const User = require('./database')
// const passport = require('passport')

// // Setup jwt passport strategy
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
// opts.secretOrKey = process.env.JWT_SECRET

// passport.use(
//   new JwtStrategy(opts, function (jwt_payload, done) {
//     User.findOne({ id: jwt_payload.id }, function (err, user) {
//       if (err) {
//         return done(err, false)
//       }
//       if (user) {
//         return done(null, user)
//       } else {
//         return done(null, false)
//       }
//     })
//   })
// )

// // GOOGLE STRATEGY
// // initialize GoogleStrategy passport
// // const GoogleStrategy = require('passport-google-oauth20').Strategy

// // passport.use(
// //   new GoogleStrategy(
// //     {
// //       clientID: process.env.GOOGLE_CLIENT_ID,
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// //       callbackURL: '/auth/google/callback',
// //     },
// //     function (accessToken, refreshToken, profile, cb) {
// //       cb(null, profile)
// //     }
// //   )
// // )

// // passport.serializeUser((user, cb) => {
// //   cb(null, user)
// // })

// // passport.deserializeUser((user, cb) => {
// //   cb(null, user)
// // })

// // GOOGLE STRATEGY WITH TOKEN
// // passport.use(
// //   new GoogleStrategy(
// //     {
// //       clientID: process.env.GOOGLE_CLIENT_SECRET,
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// //       callbackURL: '/auth/google/callback',
// //     },
// //     function (accessToken, refreshToken, profile, cb) {
// //       console.log(accessToken, profile)
// //       UserModel.findOne({ googleId: profile.id }, (err, user) => {
// //         if (err) return cb(err, null)
// //         if (!user) {
// //           let newUser = new User({
// //             googleId: profile.id,
// //             name: profile.displayName,
// //           })

// //           newUser.save()
// //           return cb(null, newUser)
// //         } else {
// //           return cb(null, user)
// //         }
// //       })
// //       User.findOrCreate({ googleId: profile.id }, function (err, user) {
// //         return cb(err, user)
// //       })
// //     }
// //   )
// // )
