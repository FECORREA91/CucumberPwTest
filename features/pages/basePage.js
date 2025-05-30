class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '') {
    const baseUrl = process.env.BASE_URL || 'https://magento.softwaretestingboard.com';
    await this.page.goto(`${baseUrl}${path}`);
    await this.page.waitForLoadState('networkidle');
  }

  async click(selector, options = {}) {
    await this.page.locator(selector).click(options);
  }

  async fill(selector, text, options = {}) {
    await this.page.locator(selector).fill(text, options);
  }

  async waitForSelector(selector, options = {}) {
    await this.page.locator(selector).waitFor(options);
  }

  async isVisible(selector, timeout = 15000) {
    try {
      await this.page.locator(selector).waitFor({ state: 'visible', timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }
}

module.exports = BasePage;