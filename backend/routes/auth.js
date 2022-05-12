require('dotenv').config({ path: '../.env' })
const router = require('express').Router()
const passport = require('passport')

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'auth successfull',
      user: req.user,
    })
  }
})

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'auth failed',
  })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect(process.env.CLIENT_URL + '/login')
})

// Google callback url
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL + '/main',
    failureRedirect: '/login/failed',
  })
)

// Github callback url
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }))

router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: process.env.CLIENT_URL + '/main',
    failureRedirect: '/login/failed',
  })
)

module.exports = router
