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
    extensions: [
    '.web.tsx', '.web.ts', '.web.js',
    '.tsx', '.ts', '.js', '.jsx'
  ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
      include: [
        srcPath,
        path.dirname(require.resolve('react-native-vector-icons/package.json')),
        path.dirname(require.resolve('@expo/vector-icons/package.json')),
        path.dirname(require.resolve('react-native-safe-area-context/package.json')),
        path.dirname(require.resolve('react-native-paper/package.json')),
        path.dirname(require.resolve('@expo/vector-icons/package.json')),
        
      ],
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              configFile: false,
              presets: [
                "module:metro-react-native-babel-preset",
                "@babel/preset-typescript",
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
              ],
            },
          }
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules[/\\](?!react-native-vector-icons).*/,
        loader: "source-map-loader",
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        type: "asset/resource",
        generator: {
      filename: 'fonts/[name][ext]',
    },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
