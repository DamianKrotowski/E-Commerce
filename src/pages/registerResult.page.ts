import { type Locator, type Page } from '@playwright/test';

export class RegisterResultPage {
  readonly page: Page;

  readonly registerResultText: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.registerResultText = page.locator('div[class="result"]');
    this.continueButton = page.locator(
      'a[class="button-1 register-continue-button"]',
    );
  }
}
