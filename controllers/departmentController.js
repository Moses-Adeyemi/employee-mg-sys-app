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



  
