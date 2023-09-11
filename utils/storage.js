const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Define the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, Date.now() + extname); // Rename the uploaded file with a unique name
  },
});

const upload = multer({ storage });

module.exports = upload;
