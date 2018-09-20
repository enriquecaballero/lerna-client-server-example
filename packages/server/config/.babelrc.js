const presets = [
  [
    require.resolve("babel-preset-env"),
    {
      targets: {
        node: "current"
      },
      useBuiltIns: "usage"
    }
  ]
];

const plugins = [
  require.resolve("babel-plugin-lodash"),
  require.resolve("babel-plugin-transform-class-properties"),
  require.resolve("babel-plugin-transform-object-rest-spread")
];

module.exports = {
  presets,
  plugins
};
