const express = require('express')
const router = express.Router()

// Import controller function that handles booking logic
const {createBooking} = require('../controllers/bookingController')

// -- ROUTES -- //
// POST - send the booking form data to the controller to create new booking
router.post('/', createBooking)

// Export router to be used in server.js
module.exports = router
