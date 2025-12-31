import { test as base, expect } from '@playwright/test';
import { RegisterResultPage } from '@_pages/registerResult.page';
import { RegisterPage } from '@_pages/register.page';
import { LoginPage } from '@_pages/login.page';
import { CartPage } from '@_pages/cart.page';
import { HeaderComponent } from '@_components/header.component';
import { ProductPage } from '@_pages/product.page';
import { SearchResultsPage } from '@_pages/searchResults.page';
import { CategoryNavComponent } from '@_components/categoryNav.component';
import { ProductFiltersComponent } from '@_components/productFilters.component';

type Fixtures = {
  registerResultPage: RegisterResultPage;
  registerPage: RegisterPage;
  loginPage: LoginPage;
  headerComponent: HeaderComponent;
  productPage: ProductPage;
  cartPage: CartPage;
  searchResultsPage: SearchResultsPage;
  categoryNavPageComponent: CategoryNavComponent;
  productFiltersComponent: ProductFiltersComponent;
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
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
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
  categoryNavPageComponent: async ({ page }, use) => {
    await use(new CategoryNavComponent(page));
  },
  productFiltersComponent: async ({ page }, use) => {
    await use(new ProductFiltersComponent(page));
  },
});

export { expect };
