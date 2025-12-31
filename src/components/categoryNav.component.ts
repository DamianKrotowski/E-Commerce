import { type Page } from '@playwright/test';

export class CategoryNavPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async chooseCategory(term: string) {
    await this.page
      .locator(
        `section[class="block block-category-navigation"] a[href="/${term}"]`,
      )
      .click();
  }
}
