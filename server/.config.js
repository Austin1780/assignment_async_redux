// Require and configure dotenv
require('dotenv').config({ silent: true });

// Set up a config object and add all needed environment variables
const config = {
  ENV: process.env.NODE_ENV || 'development',
  GOOD_READS_KEY: process.env.GOOD_READS_KEY,
  GOOD_READS_SECRET: process.env.GOOD_READS_SECRET
};

// Export the config object
module.exports = config;
