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
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 9000
  }
}
