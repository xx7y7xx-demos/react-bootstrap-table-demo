const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.less$/,
        use: [
          {
              loader: "style-loader" // creates style nodes from JS strings
          },
          {
              loader: "css-loader" // translates CSS into CommonJS
          },
          {
              loader: "less-loader" // compiles Less to CSS
          },
        ]
      },
    ]
  }
}
