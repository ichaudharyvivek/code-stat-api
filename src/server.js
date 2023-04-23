const express = require('express');
const dotenv = require('dotenv');

// App constants
const PORT = process.env.PORT || 3000;

// Initializations
const app = express();
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'SUCCESS' });
});

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
