import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly title: Locator;
  readonly price: Locator;
  readonly addToCartButton: Locator;
  readonly barNotification: Locator;
  readonly productBoxAddToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator(
      'form[id="product-details-form"] div[class="product-name"]',
    );
    this.price = page.locator('.product-price');
    this.addToCartButton = page
      .getByRole('button', { name: /add to cart/i })
      .first();
    this.barNotification = page.locator('#bar-notification');
    this.productBoxAddToCartButton = page
      .locator(
        '.product-box-add-to-cart-button, button.product-box-add-to-cart-button',
      )
      .first();
  }

  async gotoProduct(slug: string) {
    await this.page.goto(`/${slug}`);
  }

  async addToCart() {
    const pdpVisible = await this.addToCartButton
      .isVisible()
      .catch(() => false);
    if (pdpVisible) {
      await this.addToCartButton.click();
      return;
    }

    const tileVisible = await this.productBoxAddToCartButton
      .isVisible()
      .catch(() => false);
    if (tileVisible) {
      await this.productBoxAddToCartButton.click();
      return;
    }
    await this.addToCartButton.click();
  }
}
