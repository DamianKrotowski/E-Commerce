import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartRows: Locator;
  readonly productNameText: Locator;
  readonly productPriceText: Locator;
  readonly quantityUpButton: Locator;
  readonly quantityInput: Locator;
  readonly orderTotal: Locator;
  readonly couponInput: Locator;
  readonly applyCouponButton: Locator;
  readonly couponErrorText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartRows = page.locator('.cart-item-row');
    this.productNameText = page.locator(
      'table[class="cart"] a[class="product-name"]',
    );
    this.productPriceText = page.locator(
      'table[class="cart"] span[class="product-subtotal"]',
    );
    this.quantityUpButton = page.locator(
      'table[class="cart"] div[class="quantity up"]',
    );
    this.quantityInput = page.locator(
      'table[class="cart"] input[class="qty-input"]',
    );
    this.orderTotal = page.locator('.order-total');
    this.couponInput = page.locator('#discountcouponcode');
    this.applyCouponButton = page
      .locator('div[class="coupon-code"] button[type="submit"]')
      .first();
    this.couponErrorText = page.locator(
      'div[class="deals"] div[class="message-failure"]',
    );
  }

  async applyCoupon(code: string) {
    await this.couponInput.fill(code);
    await this.applyCouponButton.click();
  }
}
