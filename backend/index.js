require('dotenv').config()
const express = require('express')
const cookieSession = require('cookie-session')
const cors = require('cors')
const passport = require('passport')

const app = express()
// google and github auth is consider session-based strategy
// so we need to use cookie-session to store the session

// jwt strategy is consider stateless/token-based strategy
// jwt will create a new credentials in a form of a token
// then we can use the token to access the protected resources in each subsequent request

// body-parser middleware
app.use(express.json)
app.use(express.urlencoded({ extended: true }))
// access the backend from the frontend with cors
app.use(cors())

// set new port from env, default back to 3000
const port = process.env.PORT || 3000
app.listen(port, () => console.log('ping'))

// app.use(
//   cookieSession({ name: 'session', keys: ['key1'], maxAge: 24 * 60 * 60 * 100 })
// )
// app.use(passport().initialize())
// app.use(passport().session())
