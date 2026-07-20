# Notes

This document summarizes key decisions, assumptions, and known limitations for this Playwright + TypeScript E2E test suite.

## Key decisions

- **Page Object Model (POM) + fixtures**
  - UI locators and actions are encapsulated in page/component objects.
  - `src/fixtures/pages.fixture.ts`

- **Component-style page objects for shared UI**
  - Common UI elements used across many flows (e.g. header, category navigation, filters) were placed in `src/components/` and named `*.component.ts`.

## Assumptions

- **Target site**
  - Tests run against the public demo store: https://demo.nopcommerce.com.

## Known limitations

- **CAPTCHA / bot protection**
  - The demo site may occasionally show CAPTCHA or bot-detection challenges (especially after repeated runs), which can block fully automated execution in CI.

- **Demo environment instability**
  - Public demo stores can be slower, flaky, or change UI/DOM without notice. Some selectors may need updates if the site changes.
