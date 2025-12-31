import { type Locator, type Page } from '@playwright/test';
import type { UserRegistrationData } from '@_testdata/testData';

export class RegisterPage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly firstNameRequiredError: Locator;
  readonly lastNameRequiredError: Locator;
  readonly emailRequiredError: Locator;
  readonly passwordRequiredError: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.getByRole('button', { name: 'Register' });

    this.firstNameRequiredError = page.getByText('First name is required.');
    this.lastNameRequiredError = page.getByText('Last name is required.');
    this.emailRequiredError = page.getByText('Email is required.');
    this.passwordRequiredError = page.getByText('Password is required.');
  }
  async fillForm(user: UserRegistrationData) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.confirmPasswordInput.fill(user.password);
  }
}
