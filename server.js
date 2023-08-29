const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const staffRoutes = require('./routes/staffRoutes');
const departmentRoutes = require('./routes/departmentRoutes');




dotenv.config();
connectDB();

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', staffRoutes);
app.use('/api', departmentRoutes);



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});