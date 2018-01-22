const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
const CLIENT_DIR = path.resolve(__dirname, 'src');
const EXAMPLE_DIR = path.resolve(__dirname, 'example');
const DIST_DIR = path.resolve(__dirname, 'dist');

const loaders = [{
  test: /\.js$/,
  include: [CLIENT_DIR,EXAMPLE_DIR],
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'react','stage-0']
  }
},
{
  test: /\.jsx?$/,
      include: [CLIENT_DIR,EXAMPLE_DIR],
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015','react','stage-0']
      }
},
// {
//   test: /\.less$/,
//   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
// },
// {
//   test: /\.scss$/,
//   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
// }
];

module.exports = [{
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    library: 'reactformlib',
    libraryTarget: 'umd',
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
  },
  plugins: [
  ]
},
{
  name: 'example',
  target: 'web',
  context: EXAMPLE_DIR,
  entry: './app.js',
  output: {
    //library: 'reactformlib',
    //libraryTarget: 'umd',
    path: DIST_DIR,
    filename: 'example.js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
  },
  plugins: [
  ]
}
];