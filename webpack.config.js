const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
const CLIENT_DIR = path.resolve(__dirname, 'src');
//const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'dist');
const EXAMPLE_DIR = path.resolve(__dirname,'example')

const loaders = [{
  test: /\.js$/,
  include: [CLIENT_DIR,EXAMPLE_DIR],
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'react']
  }
},
{
  test: /\.jsx?$/,
    include: [CLIENT_DIR,EXAMPLE_DIR],
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015','react']
      }
},
{
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
},
{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
}
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
    alias: {
      components: path.resolve(CLIENT_DIR, 'components')
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', {allChunks: true}),
   //  new webpack.DefinePlugin({ 
   //    'process.env': { 
   //     'NODE_ENV': JSON.stringify('production'),
   //    } 
   //  }),
   // new webpack.optimize.UglifyJsPlugin(),
   // new webpack.optimize.DedupePlugin()
  ]
},
{
  name:'example',
  target:'web',
  context:EXAMPLE_DIR,
  entry:'./main.js',
  output:{
    path:EXAMPLE_DIR+'/public',
    filename:'examplebundle.js'
  },
  module:{
    loaders:loaders
  },
  plugins:[
    new ExtractTextPlugin('example.css',{allChunks:true})
  ]
}];