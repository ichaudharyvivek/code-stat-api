const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Dev logger format
const devFormat = printf(
  ({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`
);

// Dev logger configurations
exports.devLogger = () =>
  createLogger({
    level: 'debug',
    format: combine(
      format.colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      devFormat
    ),
    transports: [new transports.Console()],
  });
