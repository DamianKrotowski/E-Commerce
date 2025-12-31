import { type Locator, type Page } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly productItems: Locator;
  readonly productTitleLinks: Locator;
  readonly emptyResultsText: Locator;
  readonly priceMinInput: Locator;
  readonly priceMaxInput: Locator;
  readonly priceFilterButton: Locator;
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
    this.priceMinInput = page.locator('input[name="pricefrom"]');
    this.priceMaxInput = page.locator('input[name="priceto"]');
    this.priceFilterButton = page.getByRole('button', { name: /filter/i });
  }

  async applyPriceRange(min: number, max: number) {
    await this.priceMinInput.fill(String(min));
    await this.priceMaxInput.fill(String(max));

    if (await this.priceFilterButton.count()) {
      await this.priceFilterButton.click();
    } else {
      await this.page.keyboard.press('Enter');
    }
  }
}
