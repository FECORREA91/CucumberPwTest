const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');

Given('I am logged in to my Magento account', async function () {
  this.homePage = new HomePage(this.page);
  this.loginPage = new LoginPage(this.page);
  
  await this.homePage.navigate();
  await this.homePage.clickSignIn();
  
  const email = process.env.TEST_EMAIL || 'apcorreaf@gmail.com';
  const password = process.env.TEST_PASSWORD || 'byiADrG2Z.NsJyg';
  
  await this.loginPage.enterCredentials(email, password);
  await this.loginPage.clickLogin();
  await this.page.waitForLoadState('networkidle');
});

When('I navigate to the {string} category', async function (category) {
  this.productPage = new ProductPage(this.page);
  await this.homePage.clickCategory(category);
});

When('I select {string} from the list', async function (productName) {
  await this.productPage.selectProduct(productName);
});

When('I select size {string} and color {string}', async function (size, color) {
  await this.productPage.selectSizeAndColor(size, color);
});

When('I set quantity to {string}', async function (quantity) {
  await this.productPage.setQuantity(quantity);
});

When('I add the product to my cart', async function () {
  await this.productPage.addToCart();
});

When('I proceed to checkout', async function () {
  await this.productPage.proceedToCheckout();
});

Then('I should see the checkout page', async function () {
  const isCheckoutVisible = await this.productPage.isVisible(this.productPage.checkoutPageTitle);
  expect(isCheckoutVisible, 'La página de checkout debería ser visible').to.be.true;
});

When('I fill shipping information:', async function (dataTable) {
  const shippingData = dataTable.hashes()[0];
  await this.productPage.fillShippingInformation(shippingData);
});

When('I proceed to next step', async function () {
  await this.productPage.proceedToNextStep();
});

When('I place the order', async function () {
  await this.productPage.placeOrder();
});

Then('I should see the order confirmation page', async function () {
  const isSuccessVisible = await this.productPage.isVisible(this.productPage.orderSuccessPage);
  expect(isSuccessVisible, 'La página de confirmación de orden debería ser visible').to.be.true;
});

Then('I should see my order number', async function () {
  const orderNumber = await this.productPage.getOrderNumber();
  expect(orderNumber).to.match(/[0-9]+/, 'El número de orden debería ser visible');
  console.log(`Número de orden generado: ${orderNumber}`);
});