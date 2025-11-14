require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const connectDB = require('./src/config/db');

const authRoutes = require('./src/routes/auth');
const houseRoutes = require('./src/routes/houses');

const app = express();
connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve uploaded files
const uploadDir = process.env.UPLOAD_DIR || 'uploads';
app.use('/' + uploadDir, express.static(path.join(__dirname, uploadDir)));

app.use('/api/auth', authRoutes);
app.use('/api/houses', houseRoutes);

// health
app.get('/', (req, res) => {
  res.json({ success: true, message: 'UK Accommodation API is running' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
