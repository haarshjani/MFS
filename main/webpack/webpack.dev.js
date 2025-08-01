const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins:[
    ...common.plugins,
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        accounts: "accounts@http://localhost:3001/remoteEntry.js",
        transections: "transections@http://localhost:3002/remoteEntry.js",
        
      },
      shared: { react: { singleton: true , requiredVersion :"^19.1.1", eager : false}, "react-dom": { singleton: true ,requiredVersion :"^19.1.1", eager : false} }
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // 📦 serves files from here
    },
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
});
