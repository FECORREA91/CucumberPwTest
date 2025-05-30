const BasePage = require('../pages/basePage');

class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);
    // Selectores
    this.firstNameInput = '#firstname';
    this.lastNameInput = '#lastname';
    this.emailInput = '#email_address';
    this.passwordInput = '#password';
    this.confirmPasswordInput = '#password-confirmation';
    this.submitButton = '.action.submit.primary';
    this.errorMessage = '.message-error';
  }

  async fillRegistrationForm(userData) {
    await this.fill(this.firstNameInput, userData.firstName);
    await this.fill(this.lastNameInput, userData.lastName);
    await this.fill(this.emailInput, userData.email);
    await this.fill(this.passwordInput, userData.password);
    await this.fill(this.confirmPasswordInput, userData.confirmPassword);
  }

  async submitForm() {
    await this.click(this.submitButton);
    await this.page.waitForLoadState('networkidle'); // Esperar a que se complete el registro
  }
}

module.exports = RegistrationPage;