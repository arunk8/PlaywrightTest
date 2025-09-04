const environments = require('./environments');

async function globalSetup(config) {
  const env = process.env.ENV || 'qa';   // default = QA
  const configEnv = environments[env];

  // Expose globally
  global.testEnv = configEnv;
}

module.exports = globalSetup;