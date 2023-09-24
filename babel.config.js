module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".json",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          root: ["."],
          alias: {
            $src: "./src",
            assets: "./assets",
          },
        },
      ],
    ],
  };
};