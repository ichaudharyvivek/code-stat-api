const { devLogger } = require('./devLogger');
const { prodLogger } = require('./prodLogger');

let logger = null;

// Initialize properties of dev logger
if (process.env.NODE_ENV === 'development') {
  logger = devLogger();
}

// Initialize properties of prod logger
if (process.env.NODE_ENV === 'production') {
  logger = prodLogger();
}

// Export logger
module.exports = logger;
