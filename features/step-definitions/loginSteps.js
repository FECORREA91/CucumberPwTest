const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');
const faker = require('faker');

Given('I navigate to the Magento homepage', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.navigate();
  await this.takeScreenshot('homepage-loaded');
});

When('I click on the {string} link', async function (linkText) {
  if (linkText === 'Sign In') {
    await this.homePage.clickSignIn();
    this.loginPage = new LoginPage(this.page);
    await this.takeScreenshot('signin-page');
  }
});

When('I enter valid login credentials', async function () {
  const email = process.env.TEST_EMAIL || 'apcorreaf@gmail.com';
  const password = process.env.TEST_PASSWORD || 'byiADrG2Z.NsJyg';
  await this.loginPage.enterCredentials(email, password);
});

When('I enter invalid login credentials', async function () {
  await this.loginPage.enterCredentials(
    faker.internet.email(),
    faker.internet.password()
  );
});


When('I click the login button', async function () {
  await this.loginPage.clickLogin();
  await this.page.waitForTimeout(1000);
});

Then('I should see the login success dashboard', async function () {
  const isVisible = await this.loginPage.isDashboardVisible();
  expect(isVisible).to.be.true;
});

Then('I should see an error message', async function () {
  const isVisible = await this.loginPage.isVisible(this.loginPage.errorMessage, 15000);
  expect(isVisible).to.be.true;
});

Then('I should not be logged in', async function () {
  const isVisible = await this.loginPage.isDashboardVisible();
  expect(isVisible).to.be.false;
});