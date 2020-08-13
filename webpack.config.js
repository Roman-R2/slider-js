'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './demo/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/demo/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
