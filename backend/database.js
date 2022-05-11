require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI
const mongoClient = mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to DB')
  })
  .catch((err) => {
    console.log('MongoDB connection error')
    console.log(err)
  })

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  role: String,
})

const User = mongoose.model('User', userSchema)

module.exports = { User }

// require('dotenv').config()
// const mongoose = require('mongoose')

// // Create mongoose instance
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to DB')
//   })
//   .catch((err) => {
//     console.log('MongoDB connection error')
//   })

// // Schema constructor
// // A Mongoose 'schema' is a document data structure that is enforced via the application layer.
// const userSchema = mongoose.Schema({
//   email: String,
//   password: String,
// })

// // Compile schema into a model
// // 'Models' are higher-order constructors that take a schema and create an instance of a document.
// const User = mongoose.model('User', userSchema)

// module.exports = User
