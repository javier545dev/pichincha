module.exports = {
  root: true,
  extends: "@react-native",
  plugins: ["react", "react-native", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        semi: false,
        arrowParens: "avoid",
        jsxBracketSameLine: true,
      },
    ],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "react-hooks/exhaustive-deps": "off",
    "react-native/no-inline-styles": "off",
  },
}
