const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
        }),
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin()
  ]);
}

module.exports = config;
