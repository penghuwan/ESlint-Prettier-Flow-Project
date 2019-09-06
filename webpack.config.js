const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  entry: {
    main: ["./src/index.js"]
  },

  output: {
    filename: "[hash]-[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    chunkFilename: "[name].chunk.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
  ],

  mode: "development"
};

module.exports = devConfig;
