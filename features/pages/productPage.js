const BasePage = require('../pages/basePage');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    // Selectores
    this.productItem = (productName) => `a.product-item-link:has-text("${productName}")`;
    this.sizeOption = (size) => `div.swatch-option.text[option-label="${size}"]`;
    this.colorOption = (color) => `div.swatch-option.color[option-label="${color}"]`;
    this.quantityInput = '#qty';
    this.addToCartButton = '#product-addtocart-button';
    this.cartCounter = '.counter-number';
    this.proceedToCheckoutButton = 'button.proceed-to-checkout';
    this.checkoutPageTitle = 'h1.page-title:has-text("Checkout")';
    this.orderSuccessPage = 'h1.page-title:has-text("Thank you for your purchase!")';
    this.orderNumber = '.order-number';
    
    // Selectores de información de envío
    this.companyField = 'input[name="company"]';
    this.streetAddressField = 'input[name="street[0]"]';
    this.cityField = 'input[name="city"]';
    this.stateDropdown = 'select[name="region_id"]';
    this.zipField = 'input[name="postcode"]';
    this.phoneField = 'input[name="telephone"]';
    this.nextButton = 'button.continue';
    this.placeOrderButton = 'button.action.primary.checkout';
  }

  async selectProduct(productName) {
    await this.click(this.productItem(productName));
    await this.page.waitForLoadState('networkidle');
  }

  async selectSizeAndColor(size, color) {
    await this.click(this.sizeOption(size));
    await this.click(this.colorOption(color));
  }

  async setQuantity(quantity) {
    await this.fill(this.quantityInput, quantity);
  }

  async addToCart() {
    await this.click(this.addToCartButton);
    await this.page.waitForSelector(this.cartCounter, { state: 'visible' });
  }

  async proceedToCheckout() {
    await this.click(this.proceedToCheckoutButton);
    await this.page.waitForSelector(this.checkoutPageTitle, { state: 'visible' });
  }

  async fillShippingInformation(data) {
    await this.fill(this.companyField, data.Company);
    await this.fill(this.streetAddressField, data.Address);
    await this.fill(this.cityField, data.City);
    await this.page.selectOption(this.stateDropdown, { label: data['State/Province'] });
    await this.fill(this.zipField, data.ZIP);
    await this.fill(this.phoneField, data.Phone);
  }

  async proceedToNextStep() {
    await this.click(this.nextButton);
    await this.page.waitForLoadState('networkidle');
  }

  async placeOrder() {
    await this.click(this.placeOrderButton);
    await this.page.waitForSelector(this.orderSuccessPage, { state: 'visible' });
  }

  async getOrderNumber() {
    return await this.page.locator(this.orderNumber).textContent();
  }
}

module.exports = ProductPage;