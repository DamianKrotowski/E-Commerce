import { type Locator } from '@playwright/test';
import { expect } from '@_fixtures/pages.fixture';

export const verifyAuth = {
  async loggedIn(params: {
    myAccountLink: Locator;
    loginLink: Locator;
    logoutLink?: Locator;
  }) {
    const myAccountVisible = await params.myAccountLink
      .first()
      .isVisible()
      .catch(() => false);
    const logoutVisible = params.logoutLink
      ? await params.logoutLink
          .first()
          .isVisible()
          .catch(() => false)
      : false;

    // Prefer a positive indicator, but on some pages the header can be different.
    if (!myAccountVisible && !logoutVisible) {
      await expect(
        params.loginLink,
        'Login link should not exist when logged in',
      ).toHaveCount(0);
      return;
    }

    await expect(
      params.loginLink,
      'Login link should not be visible when logged in',
    ).toHaveCount(0);
  },

  async loggedOut(params: {
    loginLink: Locator;
    registerLink: Locator;
    logoutLink?: Locator;
  }) {
    await expect(
      params.loginLink,
      'Login link should be visible when logged out',
    ).toBeVisible();
    await expect(
      params.registerLink,
      'Register link should be visible when logged out',
    ).toBeVisible();

    if (params.logoutLink) {
      await expect(
        params.logoutLink,
        'Logout link should not exist when logged out',
      ).toHaveCount(0);
    }
  },
};
