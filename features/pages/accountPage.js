const BasePage = require('../pages/basePage');

class AccountPage extends BasePage {
  constructor(page) {
    super(page);
    // Selectores mejorados para mayor estabilidad
    this.successMessage = '.message-success';
    this.welcomeMessage = '.panel.header .logged-in';
    this.accountDashboard = '.column.main';
    this.accountInfo = '.box-information';
    this.contactInfo = '.box-information .box-title';
  }

  /**
   * Verifica si el mensaje de éxito de registro es visible
   * @returns {Promise<boolean>}
   */
  async isSuccessMessageVisible() {
    return await this.isVisible(this.successMessage, 15000);
  }

  /**
   * Verifica si el dashboard de la cuenta es visible
   * @returns {Promise<boolean>}
   */
  async isDashboardVisible() {
    return await this.isVisible(this.accountDashboard, 10000);
  }

  /**
   * Obtiene el texto de bienvenida
   * @returns {Promise<string>}
   */
  async getWelcomeText() {
    return await this.page.locator(this.welcomeMessage).textContent();
  }

  /**
   * Verifica si la información de contacto es correcta
   * @param {string} expectedName - Nombre esperado
   * @returns {Promise<boolean>}
   */
  async isContactInfoCorrect(expectedName) {
    try {
      await this.page.locator(this.accountInfo).waitFor({ state: 'visible', timeout: 10000 });
      const contactText = await this.page.locator(this.contactInfo).textContent();
      return contactText.includes(expectedName);
    } catch (error) {
      console.error('Error al verificar la información de contacto:', error);
      return false;
    }
  }

  /**
   * Navega a una sección específica del dashboard
   * @param {string} section - Sección a navegar (ej. 'Account Information', 'Address Book')
   */
  async navigateToSection(section) {
    const sectionLink = `a:has-text("${section}")`;
    await this.click(sectionLink);
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = AccountPage;