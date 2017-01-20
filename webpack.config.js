var config = require('config')
var webpack = require('webpack')

module.exports = {
  devtool: config.get('NODE_ENV') ? 'inline-sourcemap' : null,
  entry: './app.js',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  output: {
    filename: 'app.min.js'
  },
  plugins: config.get('NODE_ENV') === 'development' ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]
}
