const express = require('express')
const router = express.Router()
const multer = require('multer')
const Car = require('../models/car')
require('dotenv').config({ path: '../.env' })

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let newDestination = '../client/public/uploads'
    cb(null, newDestination)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
// Initiate multer upload
const upload = multer({
  limits: {
    fieldNameSize: 100,
    fileSize: 60000000,
  },
  storage: storage,
})

// Get all cars
router.get('/', (req, res) => {
  Car.find()
    .then((car) => {
      res.json(car)
    })
    .catch((err) => {
      res.status(400).json({ message: err })
    })
})

// Get car by id
router.get('/:id', (req, res) => {
  Car.findById(req.params.id)
    .then((car) => {
      res.json(car)
    })
    .catch((err) => {
      res.status(400).json({ message: err })
    })
})

// Post new car data
router.post('/add', upload.single('image'), (req, res) => {
  const car = new Car({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    model: req.body.model,
    image: req.file.originalname,
    description: req.body.description,
    passenger: req.body.passenger,
    startRent: req.body.startRent,
    finishRent: req.body.finishRent,
  })

  car
    .save()
    .then(() => {
      res.send({
        success: true,
        message: 'Car document created successfully.',
      })
    })
    .catch((err) => {
      res.status(400).send({
        success: false,
        message: 'Error adding car.',
      })
    })
})

module.exports = router
