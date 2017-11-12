'use strict';

const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false
    })
  ],
  node: {
    fs: 'empty'
  },
  watch: true
}

module.exports = config;