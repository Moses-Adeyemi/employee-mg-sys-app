const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  phoneCode: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  department: { 
    type: String, 
    required: true 
  },
  address:{
    type:String,
    required: true
  },
}, { timestamps: true }); 

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
