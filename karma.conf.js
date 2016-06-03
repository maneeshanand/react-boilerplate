// Karma configuration
// Generated on Mon Feb 16 2015 17:26:59 GMT-0500 (EST)

//var bootstrap = require('./karma_plugins/bootstrap.js')
var webpackConfig = Object.create(require('./webpack.config.js'));
webpackConfig.devtool = 'inline-source-map';
webpackConfig.entry = {} ;
webpackConfig.watch = true;

module.exports = function(config) {
  config.set({
    basePath: '',
    webpack: webpackConfig,
    //frameworks: ['es5-shim', 'mocha', 'chai', 'sinon-chai', 'chai-jquery', 'jquery-2.1.0', 'bootstrap'],
    frameworks: ['mocha'],
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
    //plugins: [webpack, 'karma-*'],
    browserNoActivityTimeout: 100000,
    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    }
  });
};
