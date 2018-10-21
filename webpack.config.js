const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports={
    entry: './index.js',
    output: {
        filename: 'bundle.js',
    },
    performance: {
      hints: false
    },
    devServer:{
        index: 'index.html',
    },
    watch: true,
  module: {
    rules: [{
      test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: 'postcss-loader',
        options: {
            plugins: [
                autoprefixer({
                    browsers:['ie >= 8', 'last 4 version']
                })
            ],
            sourceMap: true
        }
    }, {
        loader: "sass-loader",
        options: {
          includePaths: []
        }
      },]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"]
    }]
  },
  plugins: [
    new LiveReloadPlugin({}),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules"),
    ]),
  ]
}