require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { hashSync, compareSync } = require('bcrypt')
const { mongoClient, User } = require('./database')
const jwt = require('jsonwebtoken')
const passport = require('passport')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(passport.initialize())

require('./passport')

app.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      // handle case where user already exists
      return res.status(401).send({
        success: false,
        message: 'Username already exists',
      })
      // res.redirect('/')
    } else {
      // handle case where user doesn't exist yet
      const user = new User({
        username: req.body.username,
        password: hashSync(req.body.password, 10),
      })

      user
        .save()
        .then((user) => {
          res.send({
            success: true,
            message: 'User created successfully.',
            user: {
              id: user._id,
              username: user.username,
            },
          })
        })
        .catch((err) => {
          res.send({
            success: false,
            message: 'Something went wrong',
            error: err,
          })
        })
    }
  })
})

app.post('/login', (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    //No user found
    if (!user) {
      return res.status(401).send({
        success: false,
        message: 'Could not find the user.',
      })
    }

    //Incorrect password
    if (!compareSync(req.body.password, user.password)) {
      return res.status(401).send({
        success: false,
        message: 'Incorrect password',
      })
    }

    const payload = {
      username: user.username,
      id: user._id,
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

    return res.status(200).send({
      success: true,
      message: 'Logged in successfully!',
      token: 'Bearer ' + token,
    })
  })
})

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.status(200).send({
    success: true,
    user: {
      id: req.user._id,
      username: req.user.username,
    },
  })
})

const port = process.env.PORT
app.listen(port, () => console.log('Listening to port ' + port))

// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')
// const { hashSync, compareSync } = require('bcrypt')
// const User = require('./database')
// const jwt = require('jsonwebtoken')
// const passport = require('passport')
// require('./passport')

// const cookieSession = require('cookie-session')
// const authRoute = require('./routes/auth')

// const app = express()

// app.use(cors())
// app.use(express.json)
// app.use(express.urlencoded({ extended: true }))
// app.use(passport.initialize())

// // COOKIE MIDDLEWARE SETUP
// // set cookie-session
// // app.use(
// //   cookieSession({ name: 'session', keys: ['key1'], maxAge: 24 * 60 * 60 * 100 })
// // )
// // app.use(passport.initialize())
// // app.use(passport.session())

// // app.use(
// //   cors({
// //     origin: 'http://localhost:3000', //Client Server
// //     methods: 'GET, POST, PUT, DELETE',
// //     credentials: true,
// //   })
// // )

// // set router
// // app.use('/auth', authRoute)

// // JWT ROUTE SETUP
// // register
// app.post('/register', (req, res) => {
//   const user = new User({
//     username: req.body.username,
//     password: hashSync(req.body.password, 10),
//   })

//   user
//     .save()
//     .then((user) => {
//       res.send({
//         success: true,
//         message: 'User created successfully',
//         user: {
//           id: user._id,
//           username: user.username,
//         },
//       })
//     })
//     .catch((err) => {
//       res.send({
//         success: false,
//         message: 'Something went wrong',
//         error: err,
//       })
//     })
// })

// // login
// app.post('/login', (req, res) => {
//   User.findOne({ username: req.body.username }).then((user) => {
//     // no user found
//     if (!user) {
//       return res.status(401).send({
//         success: false,
//         message: 'Could not find the user',
//       })
//     }
//     // password incorrect
//     if (compareSync(req.body.password, user.password)) {
//       return res.status(401).send({
//         success: false,
//         message: 'Incorrect password',
//       })
//     }
//     // create token payload
//     const payload = {
//       username: user.username,
//       id: user._id,
//     }
//     // create jwt token
//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: '15m',
//     })

//     // login success
//     return res.status(200).send({
//       success: true,
//       message: 'Logged in successfully',
//       token: 'Bearer ' + token,
//     })
//   })
// })

// app.get(
//   '/protected',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     return res.status(200).send({
//       success: true,
//       user: {
//         id: req.user._id,
//         username: req.user.username,
//       },
//     })
//   }
// )

// // set new port from env, default back to 3000
// const port = process.env.PORT
// app.listen(port, () => console.log('ping on port ' + port))
