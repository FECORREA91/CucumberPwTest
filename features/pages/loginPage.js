const BasePage = require('../pages/basePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = '#email';
    this.passwordInput = '#pass';
    this.loginButton = "(//button[@id='send2'])[1]";
    this.errorMessage = "div[data-bind='html: $parent.prepareMessageForHtml(message.text)']";
    this.dashboard = "//div[@class='panel header']//span[@class='logged-in'][normalize-space()='Welcome, Fabian Correa!']";
  }

  async enterCredentials(email, password) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.click(this.loginButton);
  }

  async isErrorMessageVisible() {
    return await this.isVisible(this.errorMessage)
  }

  async isDashboardVisible() {
    return await this.isVisible(this.dashboard);
  }
}

module.exports = LoginPage;