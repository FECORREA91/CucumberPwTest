const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../pages/homePage');
const RegistrationPage = require('../pages/registrationPage');
const AccountPage = require('../pages/accountPage');

Given('I navigate to the Magento homepage', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.navigate('https://magento.softwaretestingboard.com/');
});

When('I click on the {string} link', async function (linkText) {
  if (linkText === 'Create an Account') {
    await this.homePage.clickCreateAccount();
    this.registrationPage = new RegistrationPage(this.page);
  }
});

When('I fill in the registration form with valid details', async function () {
  // Generar datos de prueba únicos
  const timestamp = Date.now();
  this.testUser = {
    firstName: 'Test',
    lastName: `User${timestamp}`,
    email: `testuser${timestamp}@example.com`,
    password: 'Test1234!',
    confirmPassword: 'Test1234!'
  };
  
  await this.registrationPage.fillRegistrationForm(this.testUser);
});

When('I submit the registration form', async function () {
  await this.registrationPage.submitForm();
  this.accountPage = new AccountPage(this.page);
});

Then('I should see the registration success dashboard', async function () {
  const isSuccessVisible = await this.accountPage.isSuccessMessageVisible();
  expect(isSuccessVisible, 'El mensaje de éxito de registro debería ser visible').to.be.true;
});

Then('I should see my account dashboard', async function () {
  // Verificar dashboard visible
  const isDashboardVisible = await this.accountPage.isDashboardVisible();
  expect(isDashboardVisible, 'El dashboard de la cuenta debería ser visible').to.be.true;
  
  // Verificar información de contacto
  const isInfoCorrect = await this.accountPage.isContactInfoCorrect(this.testUser.firstName);
  expect(isInfoCorrect, 'La información de contacto debería mostrar el nombre correcto').to.be.true;
});