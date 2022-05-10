const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://benz:99gDBvhkEasujyQ0@cluster0.m7ias.mongodb.net/passport-jwt?retryWrites=true&w=majority'
)

const userSchema = mongoose.Schema({
  username: String,
  password: String,
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel

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
//   username: String,
//   password: String,
// })

// // Compile schema into a model
// // 'Models' are higher-order constructors that take a schema and create an instance of a document.
// const User = mongoose.model('User', userSchema)

// module.exports = User
