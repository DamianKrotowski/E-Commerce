import { test, expect } from '@_fixtures/pages.fixture';

test.describe('Product Discovery', () => {
  // this is case without filters, regarding ->
  // "Apply available filters to narrow results to a specific range
  // (e.g., price range or any range-based filter present in the UI)."
  test('Path A: Search "Laptop" and verify results or 0 results', async ({
    page,
    headerPage,
    searchResultsPage,
  }) => {
    await page.goto('/');
    await headerPage.search('laptop');

    const resultCount = await searchResultsPage.productItems.count();
    const allResultTitles =
      await searchResultsPage.productTitleLinks.allTextContents();
    if (resultCount > 0) {
      await expect(searchResultsPage.productItems.first()).toBeVisible();
      for (const title of allResultTitles) {
        expect(title.toLowerCase()).toContain('laptop');
      }
    } else {
      await expect(searchResultsPage.emptyResultsText).toBeVisible();
    }
  });

  test.beforeEach(async ({ page, categoryNavPage, productFiltersPage }) => {
    await page.goto('/');
    await categoryNavPage.chooseCategory('computers');
    await categoryNavPage.chooseCategory('notebooks');
    await productFiltersPage.chooseFilter('Intel Core i5');
    await productFiltersPage.chooseFilter('8 GB');
  });
});

test('Path B: Browse category -> open product details page (not via search)', async ({
  searchResultsPage,
  productPage,
}) => {
  const firstproductNameText = await searchResultsPage.productTitleLinks
    .first()
    .innerText();

  const resultCount = await searchResultsPage.productItems.count();

  if (resultCount > 0) {
    await searchResultsPage.productTitleLinks.first().click();

    await expect(productPage.title).toContainText(firstproductNameText);
  } else {
    await expect(searchResultsPage.emptyResultsText).toBeVisible();
  }
});

test('Browse category -> open product and add to cart', async ({
  searchResultsPage,
  productPage,
  headerPage,
  cartPage,
}) => {
  const firstproductNameText = await searchResultsPage.productTitleLinks
    .first()
    .innerText();
  const firstproductPriceText = await searchResultsPage.productPriceTextValue
    .first()
    .innerText();

  const resultCount = await searchResultsPage.productItems.count();

  if (resultCount > 0) {
    await searchResultsPage.productTitleLinks.first().click();

    await expect(productPage.title).toContainText(firstproductNameText);
  } else {
    await expect(searchResultsPage.emptyResultsText).toBeVisible();
  }
  // 6. Cart Mutations
  await productPage.addToCart();
  await headerPage.cartLink.click();

  await expect(cartPage.productNameText).toHaveText(firstproductNameText);
  await expect(cartPage.productPriceText).toHaveText(firstproductPriceText);

  await cartPage.quantityUpButton.click();

  await expect(cartPage.quantityInput).toHaveValue('2');
  await expect(cartPage.productPriceText).not.toHaveText(firstproductPriceText);

  // 7. Coupon / Discount
  await cartPage.applyCoupon('DISCOUNT10');

  await expect(cartPage.couponErrorText).toBeVisible();
});
