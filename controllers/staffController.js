const Staff = require('../models/Staff.js');

// Create a new staff member
exports.createStaff = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneCode, phone, department, address } = req.body;

        // Validate inputs
        if (!firstName || !lastName || !email || !phoneCode || !phone || !department || !address) {
            return res.status(400).json({ error: 'Missing required fields' });
        }


        const newStaff = new Staff({ firstName, lastName, email, phoneCode, phone, department,  address });
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
      
        res.status(500).json({ error: `Internal Server Error` });
    }
};

// Get all staff members
exports.getAllStaff = async (req, res) => {
    try {
        const allStaff = await Staff.find().populate('department');
        res.json(allStaff);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get staff member by ID
exports.getStaffById = async (req, res) => {
    try {
        const staffId = req.params.id;
        const staff = await Staff.findById(staffId).populate('department');

        if (!staff) {
            return res.status(404).json({ error: 'Staff member not found' });
        }

        res.json(staff);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update staff member
exports.updateStaff = async (req, res) => {
    try {
        const staffId = req.params.id;
        const { firstName, lastName, email, phoneCode, phone, department, address } = req.body;

        const updatedStaff = await Staff.findByIdAndUpdate(
            staffId,
            { firstName, lastName, email, phoneCode, phone, department, address },
            { new: true }
        ).populate('department');

        if (!updatedStaff) {
            return res.status(404).json({ error: 'Staff member not found' });
        }

        res.json(updatedStaff);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete staff member
exports.deleteStaff = async (req, res) => {
    try {
        const staffId = req.params.id;
        const deletedStaff = await Staff.findByIdAndDelete(staffId);

        if (!deletedStaff) {
            return res.status(404).json({ error: 'Staff member not found' });
        }

        res.json({ message: 'Staff member deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
