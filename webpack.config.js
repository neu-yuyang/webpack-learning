const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  //   entry: "./src/index.js",
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    app: "./src/outputManage/index.js",
    print: "./src/outputManage/print.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CleanWebpackPlugin({
    //   cleanStaleWebpackAssets: false
    // }),
    new HtmlWebpackPlugin({
      title: "output manage"
    })
  ],
  devServer: {
    // 启动本地服务，并且可以热更新
    contentBase: "./dist"
  }
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: ["style-loader", "css-loader"]
  //       },
  //       {
  //         test: /\.(png|jpg|gif|jfif|svg)$/,
  //         use: ["file-loader"]
  //       },
  //       {
  //         test: /\.(woff|woff2|eot|ttf|otf|TTF)$/,
  //         use: ["file-loader"]
  //       }
  //     ]
  //   }
}
