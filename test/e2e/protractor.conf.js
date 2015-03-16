exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'specs/home.spec.js',
    'specs/login.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3001/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};