module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
          "@data": "./src/data",
          "@domain": "./src/domain",
          "@presentation": "./src/presentation",
        },
      },
    ],
  ],
}
