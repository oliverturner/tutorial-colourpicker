require('babel-register');

const webpack = require('../webpack/webpack.test.babel');

module.exports = (config) => {
  config.set({
    basePath:   '',
    frameworks: ['jasmine'],
    files:      [
      'test/**/*.js'
    ],

    // add webpack as preprocessor
    preprocessors: {
      'src/**/*.js':  ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    // kind of a copy of your webpack config
    webpack,

    // please don't spam the console when running in karma!
    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],

    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },

    reporters: ['progress'],
    port:      9876,
    colors:    true,
    logLevel:  config.LOG_INFO,
    autoWatch: true,
    browsers:  ['Chrome'],
    singleRun: false
  });
};
