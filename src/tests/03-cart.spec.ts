import { test, expect } from '@_fixtures/pages.fixture';
import verifyCart from '@_helpers/verify/cart.verify';

test.describe('Cart (add, update/remove, coupon)', () => {
  test('Add to Cart: add product and verify cart line item', async ({
    page,
    headerPage,
    productPage,
    cartPage,
  }) => {
    await page.goto('/htc-one-m8-android-l-50-lollipop');

    const name = ((await productPage.title.textContent()) ?? '').trim();
    await productPage.addToCart();

    await headerPage.gotoCart();
    await verifyCart.containsproductNameText(cartPage, name);
  });

  test('Cart Mutations: update quantity and verify total changes', async ({
    page,
    headerPage,
    productPage,
    cartPage,
  }) => {
    await page.goto('/htc-one-m8-android-l-50-lollipop');
    await productPage.addToCart();

    await headerPage.gotoCart();
    const totalBefore = await cartPage.getOrderTotalText();

    await cartPage.updateQuantity(0, 2);
    const totalAfter = await cartPage.getOrderTotalText();

    expect(totalAfter).not.toEqual(totalBefore);
  });

  test('Coupon/Discount: apply invalid coupon and verify validation message (if available)', async ({
    page,
    headerPage,
    productPage,
    cartPage,
  }) => {
    await page.goto('/htc-one-m8-android-l-50-lollipop');
    await productPage.addToCart();

    await headerPage.gotoCart();

    if (await cartPage.couponInput.count()) {
      await cartPage.applyCoupon('INVALID-CODE-123');
      await verifyCart.couponInvalidMessage(cartPage);
    } else {
      test.info().annotations.push({
        type: 'limitation',
        description:
          'Coupon UI not present on this demo configuration; scenario asserted as not supported.',
      });
      await expect(page).toHaveURL(/\/cart/);
    }
  });
});
