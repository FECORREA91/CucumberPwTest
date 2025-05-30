const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60 * 1000);

Before(async function() {
  this.browser = await chromium.launch({ 
    headless: false,
    slowMo: 500 
  });
  this.page = await this.browser.newPage();
});

After(async function() {
  await this.page.close();
  await this.browser.close();
});