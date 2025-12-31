import { test as base, expect } from '@playwright/test';
import { RegisterResultPage } from '@_pages/registerResult.page';
import { RegisterPage } from '@_pages/register.page';
import { LoginPage } from '@_pages/login.page';
import { CartPage } from '@_pages/cart.page';
import { HeaderPage } from '@_components/header.component';
import { ProductPage } from '@_pages/product.page';
import { SearchResultsPage } from '@_pages/searchResults.page';
import { CategoryNavPage } from '@_components/categoryNav.component';
import { ProductFiltersPage } from '@_components/productFilters.component';

type Fixtures = {
  registerResultPage: RegisterResultPage;
  registerPage: RegisterPage;
  loginPage: LoginPage;
  headerPage: HeaderPage;
  productPage: ProductPage;
  cartPage: CartPage;
  searchResultsPage: SearchResultsPage;
  categoryNavPage: CategoryNavPage;
  productFiltersPage: ProductFiltersPage;
};

export const test = base.extend<Fixtures>({
  registerResultPage: async ({ page }, use) => {
    await use(new RegisterResultPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  headerPage: async ({ page }, use) => {
    await use(new HeaderPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
  categoryNavPage: async ({ page }, use) => {
    await use(new CategoryNavPage(page));
  },
  productFiltersPage: async ({ page }, use) => {
    await use(new ProductFiltersPage(page));
  },
});

export { expect };
