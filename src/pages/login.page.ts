import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    const loginForm = page.locator('form').filter({
      has: page.getByRole('button', { name: 'Log in' }),
    });

    this.loginEmailInput = loginForm.locator('#Email');
    this.loginPasswordInput = loginForm.locator('#Password');
    this.loginButton = loginForm.getByRole('button', { name: 'Log in' });
  }

  async goto() {
    await this.page.goto('/login?returnUrl=%2F');
  }

  async login(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }
}
