var webpack = require('webpack')
var config = require('config')

module.exports = {
  devtool: config.get('NODE_ENV') ? 'inline-sourcemap' : null,
  entry: './app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
          plugins: ['transform-class-properties']
        }
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
  plugins: config.get('NODE_ENV') ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
}
