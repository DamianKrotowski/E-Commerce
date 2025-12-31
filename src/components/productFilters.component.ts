import { type Page } from '@playwright/test';

export class ProductFiltersComponent {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async chooseFilter(term: string) {
    await this.page
      .locator('section[class="block product-filters"]', { hasText: term })
      .click();
  }
}
