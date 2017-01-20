var config = require('config')
var webpack = require('webpack')

module.exports = {
  devtool: config.get('NODE_ENV') ? 'inline-sourcemap' : null,
  entry: './app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!fluxxed_up)/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/&resolve url'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
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
