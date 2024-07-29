const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mnjxq8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'http://rastmobile.com',
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true,
  },
});
