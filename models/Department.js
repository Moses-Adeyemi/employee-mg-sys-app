const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
