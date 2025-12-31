import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginEmailInput = page.locator(
      'div[class="form-fields"] input[type="email"]',
    );
    this.loginPasswordInput = page.locator(
      'div[class="form-fields"] input[type="password"]',
    );
    this.loginButton = page.locator(
      'div[class="buttons"] button[type="submit"]',
    );
  }

  async login(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }
}
