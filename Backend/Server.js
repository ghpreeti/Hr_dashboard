const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const hrRoutes = require('./routes/hrRoutes');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/student', studentRoutes);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
