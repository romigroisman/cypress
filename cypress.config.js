const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio:true,

  },
  chromeWebSecurity: false,
  env: {
    facebookSocialLoginUsername:"qayzn76@gmail.com",
    facebookSocialLoginPassword:"asdQWE!23",
    facebookLoginUrl:"https://www.facebook.com/",
  },
  experimentalModifyObstructiveThirdPartyCode: true,
});

