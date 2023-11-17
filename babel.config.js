module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
          "@env": "./env",
          "@data": "./src/data",
          "@domain": "./src/domain",
          "@presentation": "./src/presentation",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
      },
    ],
  ],
}
