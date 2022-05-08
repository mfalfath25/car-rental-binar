const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://scyllax2511:scyllax2511@cluster0.m7ias.mongodb.net/passport-jwt'
)

const userSchema = mongoose.Schema({
  username: String,
  password: String,
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
