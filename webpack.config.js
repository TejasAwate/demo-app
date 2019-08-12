const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"] 
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { test: /\.tsx$/, loader: 'awesome-typescript-loader' },
      { test:/\.(s*)css$/, loader:['style-loader','css-loader', 'sass-loader'] }
    ],
  }
}
