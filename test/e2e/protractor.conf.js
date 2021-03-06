exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'specs/home.spec.js',
    'specs/login.spec.js',
    'specs/addEmployee.spec.js'
  ],

  capabilities: {
    //'browserName': 'phantomjs',
    'browserName': 'chrome',
    'phantomjs.binary.path': require('phantomjs').path,
  },

  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }],

  baseUrl: 'http://localhost:3001/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
