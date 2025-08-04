const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const { watchFile } = require("fs");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    ...common.resolve,
    alias: {
      ...common.resolve.alias,
    },
  },
  plugins: [
    ...common.plugins,
    new ModuleFederationPlugin({
      name: "accounts",
      filename: "remoteEntry.js",
      exposes: {
        "./AccountList": "./src/pages/Accounts.tsx",
        "./AccountsApp": "./src/RemoteAccount",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.1.1", eager: false },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.1.1",
          eager: false,
        },
        "ui-kit": {
          singleton: true,
          eager: false,
          requiredVersion: "1.0.0",
        },
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    historyApiFallback: true,
    open: true,
    port: 3001,
  },
});
