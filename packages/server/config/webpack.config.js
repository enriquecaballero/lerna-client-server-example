const externals = require("webpack-node-externals");

module.exports = {
  output: {
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".js"]
  },
  target: "node",
  externals: [externals()],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
