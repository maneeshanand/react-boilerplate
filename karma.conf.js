// Karma configuration
// Generated on Mon Feb 16 2015 17:26:59 GMT-0500 (EST)

var webpackConfig = Object.create(require('./webpack.config.js'));
webpackConfig.devtool = 'inline-source-map';
webpackConfig.entry = {};
webpackConfig.watch = true;

module.exports = function(config) {
  config.set({
    basePath: '',
    webpack: webpackConfig,
    frameworks: ['mocha', 'chai'],
    preprocessors: {
     './tests/**/*.js': ['webpack'],
    './main/**/*.js': ['webpack']
    },
    files: [
      './tests/**/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    browserNoActivityTimeout: 100000,
    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    }
  });
};
