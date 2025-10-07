// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const environments = require('./environments');
// const envManager = require('./utils/EnvironmentManager');

// Environment setup
const env = process.env.ENV || 'qa';   // default is QA
console.log('🌍 Running tests on environment:', env);

const configEnv = environments[env];
console.log('🔑 Loaded config:', configEnv);

// const config = envManager.getConfig();
// console.log('🔑 Loaded config:', config);

// if (!configEnv) {
//   throw new Error(`❌ No configuration found for environment: ${env}`);
// }

module.exports = defineConfig({
  testDir: './tests',
  timeout: 600 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['allure-playwright'],
  ],

  use: {
    baseURL: configEnv.baseURL,   // ✅ now works
    actionTimeout: 5000,
    trace: 'on-first-retry',
    headless: false,
    screenshot: 'only-on-failure'
  },

  projects: [
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  globalSetup: require.resolve('./globalSetup'),
});
