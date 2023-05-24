require("dotenv").config();

console.log("app.config.js ENV", process.env.MY_TEST_VALUE);
if (!process.env.MY_TEST_VALUE) {
  throw new Error("nope");
}

module.exports = (config) => {
  return {
    ...config,
    name: "issue-eas-env",
    slug: "issue-eas-env",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.derkjan.issueeasenv",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "7437a1bf-7319-4a91-837c-cd448fc992b2",
      },
    },
  };
};
