import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly title: Locator;
  readonly price: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator(
      'form[id="product-details-form"] div[class="product-name"]',
    );
    this.price = page.locator('.product-price');
    this.addToCartButton = page.locator('button[id="add-to-cart-button-6"]');
  }
}
