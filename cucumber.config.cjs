const { defineConfig } = require('@cucumber/cucumber');

module.exports = defineConfig({
  // Feature files location
  features: ['features/**/*.feature'],

  // Step definitions and support files
  require: [
    'features/step-definitions/**/*.js',
    'features/support/**/*.ts',
  ],

  // Format options
  format: [
    'progress-bar',
    '@cucumber/pretty-formatter',
  ],

  // Output directory for reports
  formatOptions: {
    snippetInterface: 'async-await',
  },

  // Parallel execution
  parallel: 2,

  // Note: TypeScript loading handled by Node.js --loader flag in npm scripts

  // World parameters
  worldParameters: {
    baseUrl: 'http://localhost:3000',
  },

  // Retry failed scenarios
  retry: 1,

  // Tags to run or exclude
  // tags: '@smoke or @regression',

  // Publish results to Cucumber Reports (optional)
  publish: false,
});