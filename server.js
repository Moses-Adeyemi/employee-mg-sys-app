const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors'); // Use require for CommonJS modules
// const cookieParser = require('cookieparser');
const dotenv = require('dotenv');
const staffRoutes = require('./routes/staffRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const userRoute = require('./routes/userRoute');


dotenv.config();
connectDB();

const app = express();


app.use(cors());
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', staffRoutes);
app.use('/api', departmentRoutes);
app.use('/api', userRoute);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
