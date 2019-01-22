var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  devtool: 'hidden-source-map',
  entry: {
    vendor: './src/vendor.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'vendor',
    libraryTarget:'window',
    libraryExport: 'default',
    pathinfo: true
  },
//   externals: {
//     react: {
//       commonjs: 'react',
//       commonjs2: 'react',
//       amd: 'react',
//       window: 'React'
//     }
//   },
  module : {
    rules : [
        {
            test : /\.jsx?/,
            include : APP_DIR,
            // loader : 'babel-loader'
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        }
    ]
  },
  optimization: {
    namedModules: true,
  },
};