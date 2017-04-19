const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 9000
  }
}
