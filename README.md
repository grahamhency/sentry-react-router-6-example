# Sentry & React Router 6 Example

## Setup

###### This setup assumes you're on Node `20.5.1` and have `yalc` and `nvm` installed.

### Setup Local Sentry:

1. Clone: https://github.com/grahamhency/sentry-javascript/tree/react_router_6_wildcard_handling
2. Follow instructions in the README/CONTRIBUTING for this repo:
   1. [Setting up an Environment](https://github.com/getsentry/sentry-javascript/blob/develop/CONTRIBUTING.md#setting-up-an-environment)
   2. Run: `yarn build:dev:filter @sentry/react`, more details: [building Packages](https://github.com/getsentry/sentry-javascript/blob/develop/CONTRIBUTING.md#building-packages)
   3. Run `cd packages/react && yalc publish`

### Setup this Repo:

1. Create a `.env` file in root and add a single entry:

```
VITE_SENTRY_DSN="whatever sentry dsn you want to test with"
```

2. Run:

```
nvm use
npm i
yalc add @sentry/react
npm run dev
```

### Usage

You'll be able to click through a series of routes / pages. If you open the console you'll be able to see what the Sentry `transaction` is and matched path from react router. Where there are `*` in the matched paths array you should see the appropriate parameter in its place in the `transaction`. An example:

```
/ (2) ['*', undefined]
/profile (2) ['*', 'profile']
/param-page/:id (4) ['*', 'param-page', '*', ':id']
/param-page/:id/details (5) ['*', 'param-page', '*', ':id', 'details']
/param-page/:id/details/:superId (6) ['*', 'param-page', '*', ':id', 'details', ':superId']
```
