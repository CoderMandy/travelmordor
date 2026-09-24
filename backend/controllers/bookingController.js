const Booking = require("../models/Booking");

// POST: create a new booking and save it to MongoDB
const createBooking = async (req, res) => {
  try {
    // console.log("Incoming request body:", req.body)
    // Extract data from request
    const { name, email, phone, adventurerType, dangerAgreement, destination } =
      req.body;

    // Check for required fields before saving to database
    if (
      !name ||
      !email ||
      !adventurerType ||
      dangerAgreement !== true ||
      !destination
    ) {
      return res.status(400).json({
        message: "Please complete all required fields and accept the risks.",
      });
    }

    // Create a new booking using the Booking model
    const newBooking = new Booking({
      name,
      email,
      phone: phone || null,
      adventurerType,
      dangerAgreement,
      destination,
    });

    // Save the booking to MongoDB
    await newBooking.save();

    // Return success response with the saved booking data
    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Booking error:", error.message);

    // Return server error response if something goes wrong
    res.status(500).json({
      message: "Server error while creating booking",
    });
  }
};

// Export controller function
module.exports = { createBooking };
