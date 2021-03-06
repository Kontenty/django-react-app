const path = require("path");

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "frontend/static/frontend")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
