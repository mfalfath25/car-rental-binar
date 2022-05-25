const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema(
  {
    name: String,
    type: String,
    price: String,
    model: String,
    image: String,
    description: String,
    passenger: String,
    startRent: Date,
    finishRent: Date,
  },
  { timestamps: true }
)

const Car = mongoose.model('Car', carSchema)

module.exports = Car
