const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = merge(common, {
  mode: 'production',
  plugins:[
    ...common.plugins,
    new ModuleFederationPlugin({
      name: "main",
      remotes: {
        accounts: "accounts@accounts/remoteEntry.js",
        transactions: "transactions@transections/remoteEntry.js",
        
      },
      shared: { react: { singleton: true , requiredVersion :"^19.1.1", eager : false}, "react-dom": { singleton: true ,requiredVersion :"^19.1.1", eager : false} }
      

    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    clean: true,
  },
});
