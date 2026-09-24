// Import core dependencies
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')

// Import routes
const bookingRoutes = require('./routes/bookingRoutes')

// Initiallize the express app
const app = express()

// Environment variables
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

// -- MIDDLEWARE -- //
// Setup CORS so frontend can communicate with backend
app.use(cors())
// Parse URL-encoded data from form submission
app.use(express.urlencoded({ extended: false }))
// Parse data 
app.use(express.json())

// -- ROUTES -- //
app.use('/api/bookings', bookingRoutes)

// -- ERROR HANDLING -- //
// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` })
})

// Global Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
  })
})

// -- DATABASE CONNECTION -- //
// Connect to MongoDB before starting server
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log(`Connected to MongoDB.`)

    app.listen(PORT, () => { 
      console.log(`Mordor server is running on http://localhost:${PORT}`)
  })
  } catch (error) {
    console.error('Failed to start server.', error)
    process.exit(1)
  }
}

startServer()