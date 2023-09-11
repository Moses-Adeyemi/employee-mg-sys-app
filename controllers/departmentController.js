const Department = require('../models/Department');

exports.createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    // Validate input
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const newDepartment = new Department({ name });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.departments = async (req, res) => {
  try {
    // Retrieve all departments from the database
    const departments = await Department.find();
    // Check if there are no departments in the database
    if (departments.length === 0) {
      return res.status(404).json({ error: 'No departments found' });
    }
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



  
