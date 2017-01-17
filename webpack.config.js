/* eslint-disable */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./web/app.js'],
  output: {
    path: './web/public/js',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        presets: [
          'es2015',
          'react',
          'stage-0'
        ]
      },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        presets: [
          'es2015',
          'react',
          'stage-0'
        ]
      }
    ]
  },
};

