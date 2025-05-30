const BasePage = require('../pages/basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // Selectores existentes
    this.signInLink = "//div[@class='panel header']//li[@data-label='or']";
    this.createAccountLink = "//div[@class='panel header']//a[normalize-space()='Create an Account']";
    
    // Nuevos selectores para categorías
    this.categoryLink = (categoryName) => `a:has-text("${categoryName}")`;
  }

  // Métodos existentes
  async clickSignIn() {
    await this.click(this.signInLink);
  }

  async clickCreateAccount() {
    await this.click(this.createAccountLink);
  }

  // Nuevo método para categorías
  async clickCategory(categoryName) {
    await this.click(this.categoryLink(categoryName));
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = HomePage;