const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    ...common.resolve,
    alias: {
      ...common.resolve.alias,
      "ui-kit": path.resolve(__dirname, "../../ui-kit/src"),
    },
  },
  plugins: [
    ...common.plugins,
    new ModuleFederationPlugin({
      name: "transections",
      filename: "remoteEntry.js",
      exposes: {
        "./TransectionList": "./src/component/transections/TransectionList.tsx",
        "./TransectionDetails" : "./src/component/transections/TransectionCard.tsx",
        "./TransectionsApp": "./src/RemoteTransection",
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
      directory: path.resolve(__dirname, "dist"), // 📦 serves files from here
    },
    historyApiFallback: true,
    open: true,
    port: 3002,
  },
});
