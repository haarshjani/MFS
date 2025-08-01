const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;



module.exports = {
  entry: './src/index.tsx',
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
                "@babel/preset-flow",
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
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource'
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'auto', 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: "transections",
      filename: "remoteEntry.js",
      exposes: {
        "./TransectionsApp": "./src/RemoteTransection"
      },
      shared: { react: { singleton: true , requiredVersion :"^19.1.1", eager : false}, "react-dom": { singleton: true ,requiredVersion :"^19.1.1", eager : false} }


    })
  ],
};
