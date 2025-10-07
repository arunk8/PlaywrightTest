const environments = require('./../environments');

class EnvironmentManager {
  constructor() {
    this.currentEnv = this.determineEnvironment();
    this.config = this.loadEnvironmentConfig();
  }
  
  determineEnvironment() {
    // Priority order: CLI argument > ENV variable > default
    const envFromArgs = this.getEnvironmentFromArgs();
    const envFromEnvVar = process.env.TEST_ENV || process.env.NODE_ENV || process.env.env;
    const defaultEnv = 'dev';
    
    const environment = envFromArgs || envFromEnvVar || defaultEnv;
    
    console.log(`🌍 Running tests on: ${environment.toUpperCase()} environment`);
    
    return environment.toLowerCase();
  }
  
  getEnvironmentFromArgs() {
    const args = process.argv;
    const envArgIndex = args.findIndex(arg => arg === '--env');
    
    if (envArgIndex !== -1 && args[envArgIndex + 1]) {
      return args[envArgIndex + 1];
    }
    
    // Alternative format: --env=staging
    const envArg = args.find(arg => arg.startsWith('--env='));
    if (envArg) {
      return envArg.split('=')[1];
    }
    
    return null;
  }
  
  loadEnvironmentConfig() {
    if (!environments[this.currentEnv]) {
      throw new Error(`Environment '${this.currentEnv}' not found. Available environments: ${Object.keys(environments).join(', ')}`);
    }
    
    return environments[this.currentEnv];
  }
  
  getConfig() {
    return this.config;
  }
  
  getBaseURL() {
    return this.config.baseURL;
  }
  
  getAPIURL() {
    return this.config.apiURL;
  }
  
  getWSSOURL() {
    return this.config.wssoURL;
  }
  
  getCredentials(userType = 'user') {
    return this.config.credentials[userType];
  }
  
  getTimeouts() {
    return this.config.timeouts;
  }
  
  getDatabaseConfig() {
    return this.config.database;
  }
  
  isFeatureEnabled(feature) {
    return this.config.features[feature] || false;
  }
  
  getEnvironmentName() {
    return this.currentEnv;
  }
  
  isProduction() {
    return this.currentEnv === 'prod';
  }
  
  isDevelopment() {
    return this.currentEnv === 'dev' || this.currentEnv === 'local';
  }
}
const envManager = new EnvironmentManager();
module.exports = envManager;