// userControllers.js

const User = require("../models/userModel");

exports.userLogIn = (req, res) => {
  res.send("User login");
};

exports.userSignUp = async (req, res) => {
  try {
    // Log the incoming request body
    console.log("Signup request received:", req.body);

    // Extract data from request
    const { firstName, lastName, email, imageUrl, role } = req.body;
    const hashedPassword = req.hashedPassword;

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      imageUrl,
      password: hashedPassword,
      role,
      inventory: [],
    });

    // Save to MongoDB
    const savedUser = await newUser.save();

    // Respond with selected fields only
    res.status(201).json({
      firstName: savedUser.firstName,
      email: savedUser.email,
      role: savedUser.role,
      imageUrl: savedUser.imageUrl,
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Something went wrong during signup." });
  }
};

