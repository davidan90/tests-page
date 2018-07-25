const path = require("path");
const webpack = require("webpack");
const prodPlugins = require("./plugins");
const loaders = require("../loaders");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./../../../dist"),
    publicPath: "./",
    filename: "index.js",
    chunkFilename: "[name].chunk.js"
  },
  module: {
    rules: loaders
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  optimization: {
    minimize: true
  },
  performance: {
    hints: false
  },
  devtool: "#source-map",
  plugins: prodPlugins(webpack),
  mode: "production"
};
