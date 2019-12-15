// webpack config with typescript
// https://medium.com/webpack/unambiguous-webpack-config-with-typescript-8519def2cac7

const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};