const express = require('express');  // Import the Express framework
const staffRoutes = express.Router();     // Create an instance of the Express router
const staffController = require('../controllers/staffController');  // Import the staff controller module

// Create a new staff member
staffRoutes.post('/staff', staffController.createStaff);  
// Get all staff members
staffRoutes.get('/staff', staffController.getAllStaff);   

// Get staff member by ID
staffRoutes.get('/staff/:id', staffController.getStaffById); 

// Update staff member by ID
staffRoutes.put('/staff/:id', staffController.updateStaff);  

// Delete staff member by ID
staffRoutes.delete('/staff/:id', staffController.deleteStaff);  


module.exports = staffRoutes;  