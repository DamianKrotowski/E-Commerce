import { test, expect } from '@_fixtures/pages.fixture';

test.describe('User Login', () => {
  test.beforeEach(async ({ headerPage, loginPage, page }) => {
    await page.goto('/');
    await headerPage.loginLink.click();
    await loginPage.login(
      process.env.REGULAR_USER_EMAIL!,
      process.env.REGULAR_USER_PASSWORD!,
    );
    await loginPage.loginButton.click();
  });

  test('Should log in successfully', async ({ headerPage }) => {
    expect(headerPage.logoutLink).toBeVisible();
  });
  test('Should check if user is logged in after site refresh', async ({
    headerPage,
    page,
  }) => {
    expect(headerPage.logoutLink).toBeVisible();
    await page.reload();
    expect(headerPage.logoutLink).toBeVisible();
  });
  test('Should logout and confirm the logged-out state.', async ({
    headerPage,
  }) => {
    expect(headerPage.logoutLink).toBeVisible();
    await headerPage.logoutLink.click();

    expect(headerPage.logoutLink).toBeHidden();
    expect(headerPage.loginLink).toBeVisible();
  });
});
