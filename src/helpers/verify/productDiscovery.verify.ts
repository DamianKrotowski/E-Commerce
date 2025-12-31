import { expect } from '@_fixtures/pages.fixture';
import type { SearchResultsPage } from '@_pages/searchResults.page';

const verifyProductDiscovery = {
  async resultsOrEmpty(searchResultsPage: SearchResultsPage) {
    await Promise.race([
      searchResultsPage.productItems
        .first()
        .waitFor({ state: 'visible', timeout: 15_000 })
        .catch((): void => undefined),
      searchResultsPage.noResultMarker
        .waitFor({ state: 'visible', timeout: 15_000 })
        .catch((): void => undefined),
    ]);
  },

  async firstProductsHaveTitles(
    searchResultsPage: SearchResultsPage,
    limit = 5,
  ) {
    const resultCount = await searchResultsPage.productTitleLinks.count();
    const sample = Math.min(resultCount, limit);

    for (let i = 0; i < sample; i++) {
      await expect(searchResultsPage.productTitleLinks.nth(i)).toHaveText(
        /\S+/,
      );
    }
  },
};

export default verifyProductDiscovery;
