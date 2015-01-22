// An example configuration file.
exports.config = {
  // directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:9000',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/**/*_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
