const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './src/js/components/header.js',
    // Home
    'banner.home': './src/js/components/home/banner.js',
    'tools.home': './src/js/components/home/tools.js',


  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "bugfixes": true,
                  "targets": "> 5%"
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/static", to: "" },
        { from: "./src/assets", to: "" }
      ]
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!css/**', '!*.html']
    })
  ],
  output: {
    filename: 'components/[name].component.js',
    path: path.resolve(__dirname, 'dist')
  }
};