const path = require("path");
// const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "assets", "scripts"),
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
