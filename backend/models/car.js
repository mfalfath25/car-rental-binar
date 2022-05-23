const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema(
  {
    name: String,
    type: String,
    price: Number,
    model: String,
    description: String,
    passenger: Number,
    startRent: Date,
    finishRent: Date,
  },
  { timestamps: true }
)

const Car = mongoose.model('Car', carSchema)

module.exports = Car
