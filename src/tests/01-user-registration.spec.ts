import { test, expect } from '@_fixtures/pages.fixture';
import { prepareRandomUser } from '@_testdata/testData';

test.describe('User Registration', () => {
  test('Should register a user successfully and log in', async ({
    headerPage,
    registerPage,
    registerResultPage,
    page,
  }) => {
    const userData = prepareRandomUser();

    await page.goto('/');
    await headerPage.registerLink.click();
    await registerPage.fillForm(userData);
    await registerPage.registerButton.click();

    expect(registerResultPage.registerResultText).toContainText(
      'Your registration completed',
    );
  });
  test('Should cover at least one validation case', async ({
    headerPage,
    registerPage,
    page,
  }) => {
    await page.goto('/');
    await headerPage.registerLink.click();
    await registerPage.registerButton.click();

    expect(registerPage.firstNameRequiredError).toBeVisible();
    expect(registerPage.lastNameRequiredError).toBeVisible();
    expect(registerPage.emailRequiredError).toBeVisible();
    expect(registerPage.passwordRequiredError).toBeVisible();
  });
});
