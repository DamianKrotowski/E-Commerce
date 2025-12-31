import { type Locator, type Page } from '@playwright/test';

export class HeaderPage {
  readonly page: Page;
  readonly registerLink: Locator;
  readonly loginLink: Locator;
  readonly logoutLink: Locator;
  readonly myAccountLink: Locator;
  readonly cartLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly cartQty: Locator;
  readonly electronicsLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.registerLink = page.locator('.header-links a.ico-register');
    this.loginLink = page.locator('.header-links a.ico-login');
    this.logoutLink = page.locator('.header-links a.ico-logout');
    this.myAccountLink = page.locator('.header-links a.ico-account');
    this.cartLink = page.locator('div[class="header-links"] a[href="/cart"]');
    this.searchInput = page.getByRole('textbox', { name: 'Search store' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.cartQty = page.locator('.header-links .cart-qty');
    this.electronicsLink = page.locator(
      'nav[class="menu-container menu-dropdown"] a[href="/electronics"]',
    );
  }
  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }
}
