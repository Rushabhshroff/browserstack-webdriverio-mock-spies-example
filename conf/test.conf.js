const { config: baseConfig } = require("./base.conf.js");

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      build: 'browserstack-build-1'
    }
  },
  capabilities: [{
    browserName: 'chrome',
    browserVersion: 'latest',
    'bstack:options': {
      os: 'Windows',
      osVersion: '10',
      seleniumCdp:true,
      seleniumVersion:"4.0.0",
    }
  }],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
