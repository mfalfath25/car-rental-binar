require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user')

const MONGODB_URI = process.env.MONGODB_URI
const mongoClient = mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`Connected to ${User.db.name} database`)
  })
  .catch((err) => {
    console.log('MongoDB connection error')
    console.log(err)
  })

// Schema constructor
// A Mongoose 'schema' is a document data structure that is enforced via the application layer.
// const userSchema = mongoose.Schema({
//   email: String,
//   password: String,
//   role: String,
// })

// const carSchema = mongoose.Schema(
//   {
//     name: String,
//     type: String,
//     price: Number,
//     model: String,
//     description: String,
//     passenger: Number,
//     startRent: Date,
//     finishRent: Date,
//   },
//   { timestamps: true }
// )

// // Compile schema into a model
// // 'Models' are higher-order constructors that take a schema and create an instance of a document.
// const UserModel = mongoose.model('User', userSchema)
// const CarModel = mongoose.model('Car', carSchema)

// module.exports = { UserModel, CarModel }
// module.exports = CarModel
