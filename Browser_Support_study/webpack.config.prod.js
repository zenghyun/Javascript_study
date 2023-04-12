const path = require("path");
// const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults", useBuiltIns: 'usage', corejs: { version: 3 } }]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    devMiddleware: { publicPath: "/assets/scripts" },
    static: { directory: path.resolve(__dirname) },
  },
  // devtool: "cheap-module-eval-source-map",
//   plugins: [
//     new CleanPlugin.CleanWebpackPlugin()
//   ]
};
