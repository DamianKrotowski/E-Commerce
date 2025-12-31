import { type Locator, type Page } from '@playwright/test';

export class HeaderPage {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly loginLink: Locator;
  readonly logoutLink: Locator;
  readonly cartLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.registerLink = page.locator('.header-links a.ico-register');
    this.loginLink = page.locator('.header-links a.ico-login');
    this.logoutLink = page.locator('.header-links a.ico-logout');
    this.cartLink = page.locator('div[class="header-links"] a[href="/cart"]');
    this.searchInput = page.getByRole('textbox', { name: 'Search store' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }
  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }
}
