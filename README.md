# E-Commerce — Playwright + TypeScript E2E Tests

Automated end-to-end UI tests for the **nopCommerce demo store** using **Playwright** and **TypeScript**.

## Target application

- Demo site: https://demo.nopcommerce.com

## Tech stack

- Playwright Test
- TypeScript
- Page Object Model (POM) + fixtures
- ESLint + Prettier

## Project structure

- `src/tests/` – test specs
- `src/pages/` – page objects (application pages)
- `src/components/` – reusable UI components used across pages (e.g. header, category navigation)
- `src/fixtures/` – Playwright fixtures wiring page objects/components into tests
- `src/testdata/` – test data helpers (e.g. unique user generation)

## Prerequisites

- Node.js 18+ (recommended)
- macOS / Linux / Windows

## Setup

1. Install dependencies:
   - `npm install`
2. Install Playwright browsers:
   - `npx playwright install`

## Environment variables

Some tests require valid credentials.

Create a local `.env` file in the project root:

- `REGULAR_USER_EMAIL=your_email@example.com`
- `REGULAR_USER_PASSWORD=your_password`

> Note: `.env` should **not** be committed.

## Running tests

- Run all tests (headless): `npm run tests:gui`
- Run tests headed: `npm run tests:gui:headed`
- Run Playwright UI mode: `npm run ui-mode`
- Run only changed tests: `npm run only-changed`

## Reports

- Show the last HTML report: `npm run show-report`

## Linting

- Run ESLint: `npm run lint`

## Notes

- Tests are written to handle common UI testing challenges (async content, dynamic lists, and conditional flows).
- If a product list is empty for a given filter/search, tests assert the empty-state messaging instead of failing.

---

### Scope covered

- User Registration (incl. at least one validation case)
- Login / Session persistence + Logout
- Product discovery via search and via category browsing
- Add to cart + cart quantity mutation
- Coupon validation messaging (invalid coupon)
