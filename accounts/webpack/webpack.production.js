const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = merge(common, {
  mode: "production",
  plugins: [
    ...common.plugins,
    new ModuleFederationPlugin({
      name: "accounts",
      filename: "remoteEntry.js",
      exposes: {
        "./AccountsApp": "./src/RemoteAccount",
      },
      exposes: {
        "./AccountList": "./src/component/Accounts/AccountList.tsx",
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
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
  },
});
