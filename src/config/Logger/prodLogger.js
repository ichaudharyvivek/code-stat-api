const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Dev logger format
const prodFormat = printf(
  ({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`
);

// Dev logger configurations
exports.prodLogger = () =>
  createLogger({
    level: 'info',
    format: combine(format.colorize(), timestamp(), prodFormat),
    transports: [
      new transports.Console(),
      new transports.File({ filename: './logs/errors.log', level: 'error' }),
      new transports.File({ filename: './logs/combine.log' }),
    ],
  });
