require('dotenv').config()
require('./passport')
const express = require('express')
const cookieSession = require('cookie-session')
const cors = require('cors')
const passport = require('passport')
const { hashSync } = require('bcrypt')
const authRoute = require('./routes/auth')
// const UserModel = require('./database')

const app = express()

// google and github auth is consider session-based strategy
// so we need to use cookie-session to store the session

// jwt strategy is consider stateless/token-based strategy
// jwt will create a new credentials in a form of a token
// then we can use the token to access the protected resources in each subsequent request

// body-parser middleware
// app.use(express.json)
// app.use(express.urlencoded({ extended: true }))
// access the backend from the frontend with cors
// app.use(cors())

// set cookie-session
app.use(
  cookieSession({ name: 'session', keys: ['key1'], maxAge: 24 * 60 * 60 * 100 })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(
  cors({
    origin: 'http://localhost:3000', //Client Server
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
)

// set router
app.use('/auth', authRoute)

// set new port from env, default back to 3000
const port = process.env.PORT
app.listen(port, () => console.log('ping on port ' + port))

// // register
// app.post('/register', (req, res) => {
//   const user = new UserModel({
//     username: req.body.username,
//     password: hashSync(req.body.passpord, 10),
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
//         message: 'Somehing went wrong',
//         error: err,
//       })
//     })
// })

// // login
// app.post('/login', (req, res) => {
//   UserModel.findOne({ username: req.body.username }).then((user) => {
//     // no user found
//     if (!user) {
//       return res.status(401).send({
//         success: false,
//         message: 'Could not find the user',
//       })
//     }
//   })
// })
