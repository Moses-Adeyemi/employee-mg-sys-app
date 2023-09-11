const express = require('express');  // Import the Express framework
const departmentRoutes = express.Router();     // Create an instance of the Express router
const departmentController = require('../controllers/departmentController');  // Import the staff controller module

// Create a new staff member
departmentRoutes.post('/department', departmentController.createDepartment);  

// Get all staff members
departmentRoutes.get('/department', departmentController.departments);  
 



module.exports = departmentRoutes;  