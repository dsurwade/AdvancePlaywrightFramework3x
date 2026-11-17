# Advance Playwright Framework 3x

A TypeScript test automation project using Playwright Test for browser-based end-to-end testing and REST API testing. It includes page objects, fixtures, reusable API helpers, data utilities, schema validation, and a custom HTML reporter.

## Requirements

- Node.js (LTS recommended)
- npm
- Playwright Chromium browser for the configured project

## Setup

```bash
npm ci
npx playwright install chromium
cp .env.example .env
```

Edit `.env` and provide any credentials required by the tests you plan to run. Keep real credentials out of Git.

## Run tests

Run the full suite:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test src/tests/apiTests/05_ajv_jsonschema_validator/booking-crud.e2e.spec.ts
```

Run the Restful Booker CRUD API test against its API host:

```bash
TTA_ENV=api BASE_URL=https://restful-booker.herokuapp.com \
  npx playwright test src/tests/apiTests/01_restfulbooker_raw/06_crud.spec.ts --project=chromium
```

`BASE_URL`, when set, takes precedence over `TTA_ENV`. Without `BASE_URL`, `TTA_ENV` selects the base URL configured in `playwright.config.ts` (`api`, `dev`/`local`, `stg`/`stage`/`staging`, or `qa` by default).

## Reports

Each test run creates:

- Playwright HTML report in `playwright-report/`
- TTA custom HTML report in `tta-report/`; open `tta-report/index.html` for the latest run
- Test artifacts such as traces, screenshots, and videos

Show the Playwright HTML report with:

```bash
npx playwright show-report
```

## Project layout

```text
src/
  api/          Reusable API clients
  config/       Environment and credential helpers
  fixtures/     Shared Playwright fixtures
  pages/        Page Object Model classes
  testdata/     Test data and JSON schemas
  tests/        Browser and API test suites
  utils/        Logging, reporting, data, and other helpers
docs/           Project documentation
rules/          Project rules
```

## Environment variables

See `.env.example` for the supported environment and credential variable names. API authentication tests may require `BOOKER_USERNAME` and `BOOKER_PASSWORD`. Browser login tests can use `STANDARD_USER` and `TTA_SECRET`.

Never commit `.env` or other files containing credentials.
