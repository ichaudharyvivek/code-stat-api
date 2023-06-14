const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  const error = { statusCode: err.statusCode, message: err.message };

  if (process.env.NODE_ENV === 'development') {
    console.log(err.stack);
  }

  // Send HANDLED ERROR
  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || 'Internal Server Error' });
};

module.exports = errorHandler;
