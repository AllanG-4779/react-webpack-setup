const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },

  module: {
    //   loaders
    rules: [
      { test: /\.js|jsx$/, exclude: /node_modules/, use:{
          loader:"babel-loader"
      } },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/public/index.html"),
      filename: "index.html",
      title: "React app",
      
    }),
  ],
};
