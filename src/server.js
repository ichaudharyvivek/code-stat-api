const express = require('express');
const dotenv = require('dotenv');
const logger = require('./config/logger');

// Routes
const profile = require('./api/v1/routes/profile.route');

// App initializations
const app = express();
app.use(express.json());
dotenv.config();

// App constants
const PORT = process.env.PORT || 3000;

// Middleware
const errorHandler = require('./api/v1/middleware/errorHandler');

// API ROUTES - API V1 - /api/v1/
const v1API = '/api/v1';
app.use(`${v1API}/leetcode`, profile);
app.use(errorHandler);

// Invalid URL redirect
app.get('*', (req, res) => {
  res.status(404).json({ success: false, error: 'URL not found.' });
});

// Listen to PORT
const server = app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejection - [For eg. mongodb password is wrong]
process.on('unhandledRejection', (err) => {
  logger.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
