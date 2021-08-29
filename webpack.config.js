const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'header': './src/js/components/header.js',
    // Home
    'tools.home': './src/js/components/home/tools.js',
    'stories.home': './src/js/components/home/stories.js',
    
    // Playlist Cover Maker
    'main.coverMaker': './src/js/components/coverMaker/main.js',
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