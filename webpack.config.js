const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");


const debug = process.env.NODE_ENV !== "production";
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});
const UglifyJsPluginConfig =  new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false });

module.exports = {
  context: path.join(__dirname, "app"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./index.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.svg/,
        loader: "svg-url-loader"
      }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  plugins: debug ? [HtmlWebpackPluginConfig] : [
    HtmlWebpackPluginConfig,
    UglifyJsPluginConfig,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
}
