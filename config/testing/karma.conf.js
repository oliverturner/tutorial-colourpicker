require('babel-register');

const webpack = require('../webpack/webpack.test.babel');

module.exports = (config) => {
  config.set({
    basePath:   process.cwd(),
    browsers:   ['Chrome'],
    frameworks: ['mocha', 'chai'],
    files:      [
      'src/**/__test__/*.js'
    ],

    // add webpack as preprocessor
    preprocessors: {
      'src/**/*.jsx':         ['webpack', 'sourcemap'],
      'src/**/__test__/*.js': ['webpack', 'sourcemap']
    },

    // kind of a copy of your webpack config
    webpack: webpack.default,

    // please don't spam the console when running in karma!
    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ],

    reporters: ['mocha'],
    port:      9876,
    colors:    true,
    logLevel:  config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  });
};
