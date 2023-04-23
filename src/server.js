const express = require('express');
const dotenv = require('dotenv');

// Initializations
const app = express();
app.use(express.json());
dotenv.config();

// App constants
const PORT = process.env.PORT || 3000;

// Require routes
const profile = require('./api/v1/routes/profile.route');
const code = require('./api/v1/routes/code.route');

// Test
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'SUCCESS' });
});

// API ROUTES - API V1 - /api/v1/
const v1API = '/api/v1';
app.use(`${v1API}/leetcode/profile`, profile);
app.use(`${v1API}/leetcode/code`, code);

// Listen to PORT
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejection - [For eg. mongodb password is wrong]
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);

  // Close server and exit process
  server.close(() => process.exit(1)); // Since error so we exit with error code 1
});
