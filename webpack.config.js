const webpack = require('webpack'),
      path = require('path'),
      BUILD_DIR = path.resolve(__dirname, 'public/assets/js'),
      APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: {
    index: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        // process both js and jsx files
        test: /\.jsx?/,
        // look in APP_DIR
        include: APP_DIR,
        loader: 'babel-loader'
      },
      { 
        test: /\.(png|jpg)$/, 
        exclude: /node_modules/,
        options: {
          limit: 10000
        },
        loader: 'url-loader' 
      }
    ]
  }
}
