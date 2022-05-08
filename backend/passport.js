require('dotenv').config()
const passport = require('passport')
// const UserModel = require('./database')

const GoogleStrategy = require('passport-google-oauth20').Strategy

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

passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((user, cb) => {
  cb(null, user)
})

// const JWTStrategy = require('passport-jwt').Strategy
// passport.use(new JWTStrategy())

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_SECRET,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: '/auth/google/callback',
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       console.log(accessToken, profile)
//       UserModel.findOne({ googleId: profile.id }, (err, user) => {
//         if (err) return cb(err, null)
//         if (!user) {
//           let newUser = new User({
//             googleId: profile.id,
//             name: profile.displayName,
//           })

//           newUser.save()
//           return cb(null, newUser)
//         } else {
//           return cb(null, user)
//         }
//       })
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user)
//       })
//     }
//   )
// )
