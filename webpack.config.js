const path = require('path');
var webpack = require('webpack')
const CLIENT_DIR = path.resolve(__dirname, 'src');
const EXAMPLE_DIR = path.resolve(__dirname, 'example');
const DIST_DIR = path.resolve(__dirname, 'dist');
//var nodeExternals = require('webpack-node-externals');

const loaders = {
  rules : [
    {
      test: /\.jsx?$/,
      exclude : /node-modules/,
      use: {
        loader : 'babel-loader'
      }
    },
    {
        test: /\.scss$/,
        use : ["style-loader", "css-loader", "sass-loader"]
    }]
}

//console.log(CLIENT_DIR)

module.exports = [{
  name: 'client',
  target: 'web',
  mode: 'production',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    library: 'reactformlib',
    libraryTarget: 'commonjs',
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  externals:[{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    },{
        react : 'react'
  }],
  module: loaders,
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
    path: DIST_DIR,
    filename: 'example.js'
  },
  module: loaders,
  externals:[{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  resolve: {
  },
  plugins: [] 
}];