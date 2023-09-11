const mongoose = require('mongoose');

// Define a user schema using Mongoose
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User; // Export the User model
