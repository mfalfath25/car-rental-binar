require('dotenv').config({ path: '../.env' })
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
        info: 'Success, new car data added.',
        type: 'success',
      })
      // res.redirect(process.env.CLIENT_URL + '/dashboard/cars/add')
    })
    .catch((err) => {
      res.send({
        success: false,
        message: 'Error adding car.',
        info: 'Error, unable to add car data.',
        type: 'error',
      })
    })
})

// Update car data
router.put('/edit/:id', upload.single('image'), (req, res) => {
  Car.findByIdAndUpdate(req.params.id, req.body).then((car) => {
    ;(car.name = req.body.name),
      (car.type = req.body.type),
      (car.price = req.body.price),
      (car.model = req.body.model),
      (car.image = req.file.originalname),
      (car.description = req.body.description),
      (car.passenger = req.body.passenger),
      (car.startRent = req.body.startRent),
      (car.finishRent = req.body.finishRent)

    car
      .save()
      .then(() => {
        res.send({
          success: true,
          message: 'Car document updated successfully.',
          info: 'Success, car data updated.',
          type: 'success',
        })
      })
      .catch((err) => {
        res.send({
          success: false,
          message: 'Error editing car.',
          info: 'Error, unable to edit car data.',
          type: 'error',
        })
      })
  })
})

router.delete('/delete/:id', (req, res) => {
  Car.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: 'Deleted!',
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
})

module.exports = router
