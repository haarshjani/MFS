const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const root = path.resolve(__dirname, "../");
const srcPath = path.resolve(root, "src");
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      "react-native$": require.resolve("react-native-web"),
       '@react-native-vector-icons/material-design-icons': 'react-native-vector-icons/MaterialCommunityIcons',
      '@expo/vector-icons/MaterialCommunityIcons': 'react-native-vector-icons/MaterialCommunityIcons',
    },
    extensions: [".web.js", ".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        // include: [
        //   srcPath,
        //   path.resolve(__dirname, "../node_modules/react-native-vector-icons"),
        //   path.resolve(__dirname, "../node_modules/react-native-paper"),
        //   path.resolve(
        //     __dirname,
        //     "../node_modules/react-native-safe-area-context"
        //   ),
        //   path.resolve(__dirname, "../node_modules/react-native-web"),
        // ],
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules[/\\](?!react-native-vector-icons)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              configFile: false,
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
