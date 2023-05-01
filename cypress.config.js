const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://juice-shop.herokuapp.com/',
    watchForFileChanges: false,
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir:'cypress/reports',
    }
  },
});
