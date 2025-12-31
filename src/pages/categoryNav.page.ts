import { type Locator, type Page } from '@playwright/test';

export class CategoryNavPage {
  readonly page: Page;
  readonly electronicsLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.electronicsLink = page.locator(
      'section[class="block block-category-navigation"] a[href="/computers"]',
    );
  }

  async chooseCategory(term: string) {
    await this.page
      .locator(
        `section[class="block block-category-navigation"] a[href="/${term}"]`,
      )
      .click();
  }
}
