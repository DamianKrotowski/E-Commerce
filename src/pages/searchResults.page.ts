import { type Locator, type Page } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly productItems: Locator;
  readonly productTitleLinks: Locator;
  readonly emptyResultsText: Locator;
  readonly productPriceTextValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productItems = page.locator(
      'div[class="item-grid"] article[class="product-item"]',
    );
    this.productTitleLinks = page.locator(
      'div[class="item-grid"] h2[class="product-title"]',
    );
    this.productPriceTextValue = page.locator(
      'div[class="item-grid"] span[class="price actual-price"]',
    );
    this.emptyResultsText = page
      .locator('div[class="no-result"]')
      .getByText('No products were found that matched your criteria');
  }
}
