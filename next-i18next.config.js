const path = require("path");

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "fr", "it"]
  },
  fallbackLng: "en",
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
  returnNull: false,
  serializeConfig: false
};
