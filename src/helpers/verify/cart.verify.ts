import { expect } from '@_fixtures/pages.fixture';
import type { CartPage } from '@_pages/cart.page';

const verifyCart = {
  async hasAtLeastOneRow(cartPage: CartPage) {
    const rowCount = await cartPage.cartRows.count();
    expect(rowCount, 'Expected at least one cart row').toBeGreaterThan(0);
  },

  async containsproductNameText(cartPage: CartPage, name: string) {
    await this.hasAtLeastOneRow(cartPage);
    await expect(
      cartPage.productNameTexts.filter({ hasText: name }).first(),
    ).toBeVisible();
  },

  async couponInvalidMessage(cartPage: CartPage) {
    await expect(cartPage.couponErrorText).toBeVisible();
  },
};

export default verifyCart;
