'use strict';
var webpack = require('webpack');
module.exports = {
  entry: './source/index.js',
  output: {
    path: './build/',
    // filename: 'audiobridge-api-app.js',
    filename: 'react-dashboard.js',
  },
  devServer: {
    contentBase: "./build",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['react', 'es2015']
      }
    }],
  }
};
