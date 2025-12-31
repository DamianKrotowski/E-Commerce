import { test, expect } from '@_fixtures/pages.fixture';

test.describe('User Login', () => {
  test.beforeEach(async ({ headerComponent, loginPage, page }) => {
    await page.goto('/');
    await headerComponent.loginLink.click();
    await loginPage.login(
      process.env.REGULAR_USER_EMAIL!,
      process.env.REGULAR_USER_PASSWORD!,
    );
    await loginPage.loginButton.click();
  });

  test('Should log in successfully', async ({ headerComponent }) => {
    expect(headerComponent.logoutLink).toBeVisible();
  });
  test('Should check if user is logged in after site refresh', async ({
    headerComponent,
    page,
  }) => {
    expect(headerComponent.logoutLink).toBeVisible();
    await page.reload();
    expect(headerComponent.logoutLink).toBeVisible();
  });
  test('Should logout and confirm the logged-out state.', async ({
    headerComponent,
  }) => {
    expect(headerComponent.logoutLink).toBeVisible();
    await headerComponent.logoutLink.click();

    expect(headerComponent.logoutLink).toBeHidden();
    expect(headerComponent.loginLink).toBeVisible();
  });
});
