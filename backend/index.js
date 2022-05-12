require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { hashSync, compareSync } = require('bcrypt')
const UserModel = require('./database')
const jwt = require('jsonwebtoken')
const passport = require('passport')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:3000', //Client Server
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
)
app.use(passport.initialize())

require('./passport')

app.post('/register', (req, res) => {
  UserModel.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // handle case where user already exists
      return res.status(401).send({
        success: false,
        message: 'Email already exists',
      })
    } else {
      // handle case where user doesn't exist yet
      const user = new UserModel({
        email: req.body.email,
        password: hashSync(req.body.password, 10),
        role: req.body.role,
      })

      user
        .save()
        .then((user) => {
          res.send({
            success: true,
            message: 'User created successfully.',
            user: {
              id: user._id,
              email: user.email,
              role: user.role,
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
  UserModel.findOne({ email: req.body.email }).then((user) => {
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
      // email: user.email,
      // id: user._id
      id: user._id,
      email: user.email,
      role: user.role,
    }

    const token = jwt.sign(payload, 'Random string', { expiresIn: '1d' })

    return res.status(200).send({
      success: true,
      message: 'Logged in successfully!',
      token: 'Bearer ' + token,
      role: user.role,
    })
  })
})

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.status(200).send({
    success: true,
    user: {
      id: req.user._id,
      email: req.user.email,
    },
  })
})

const port = process.env.PORT
app.listen(port, () => console.log('Listening to port ' + port))

const cookieSession = require('cookie-session')
const authRoute = require('./routes/auth')

// COOKIE MIDDLEWARE SETUP
// set cookie-session
app.use(cookieSession({ name: 'session', keys: ['key1'], maxAge: 24 * 60 * 60 * 100 }))
app.use(passport.session())

// set router
app.use('/auth', authRoute)
