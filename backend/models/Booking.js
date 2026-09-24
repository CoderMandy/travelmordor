const mongoose = require('mongoose')

// Define the structure of the booking document in MongoDB
const bookingSchema = new mongoose.Schema(
  {
    // User's full name
    name: {
      type: String,
      required: [true, 'A name is required to begin the journey'],
      trim: true,
    },
    // User's email address
    email: {
      type: String,
      required: [true, 'No email, no journey into Mordor'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    // User's phone number
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    // Type of adventurer (must match one of the enum)
    adventurerType: {
      type: String,
      required: [true, 'Every traveler must choose their destiny'],
      enum: {
        values: ['Hobbit', 'Elf', 'Man', 'Dwarf', 'Orc', 'Ent', 'Troll', 'Maia', 'Dragon'],
        message: 'Choose a valid adventurer type to begin the journey.'
      },
    },
    // Checkbox confirmation that user accepts risks (checkbox must be true)
    dangerAgreement: {
      type: Boolean,
      required: [true, 'You must accept the dangers of Mordor'],
      validate: {
        validator: function(value) {
          return value === true // only allow true
        },
        message:'Only the brave may proceed. Accept the dangers of Mordor',
      },
    },
    // Random destination is randomly assigned by frontend
    destination: {
      name: String,
      image: String,
      attraction: String,
      fact: String,
    },
  },
  // Automatically adds date of creation
  {
    timestamps: true,
  }
)

// Export model so it can be used in controllers
module.exports = mongoose.model('Booking', bookingSchema)