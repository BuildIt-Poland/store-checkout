# Store Checkout PoC

[![Build Status](https://travis-ci.org/BuildIt-Poland/store-checkout.svg?branch=master)](https://travis-ci.org/BuildIt-Poland/store-checkout)
[![codecov](https://codecov.io/gh/BuildIt-Poland/store-checkout/branch/master/graph/badge.svg)](https://codecov.io/gh/BuildIt-Poland/store-checkout)

Check the [live version of The Store](https://store.buildit.digital/)!

Visit [The Store styleguide](https://styleguide-store.buildit.digital/)!

## Project goals
Build base for **scalable front-end architecture** -- easy to work with for developers and QA, fully transparent for stakeholders. **Automate** as many processes as possible and make their results easily available.
Make frontend communicate with backend API only by thin layer of services, making it more resilient to inevitable changes.

### 🤝 Workflow 🤝
Small, easy to estimate tasks in backlog. Code crafted and delivered according to [git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows) -- commit and issue pull requests often for easy collaboration between programmers, designers and QA (no one should be afraid to participate in PRs review process). Because only small chunks of code are merged it's easier and faster to recover from bugs or discover **accessibility and usability** problems.

### ⚙️ Solutions ⚙️
List of proven, backed by big communities solutions, which help to deliver **high-quality** code without too much friction:

* [Travis](https://travis-ci.com/) as CI tool
  * production build of application automatically deployed to web after each successful merge; **fast feedback loop** -- could be easily previewed by stakeholders / designers / QA at any time
  * set of various test suites (unit tests, linter, prettier) run on each pull request -- impossible to merge changes if something goes wrong
  * automatically deployed to cloud provider (such as AWS)
* [Jest](https://jestjs.io/) as automated unit test runner
  * unit tests collocated with components
* e2e testing environment with [Cypress](https://www.cypress.io/)
  * easy to write and maintain ent-to-end tests
  * front-end engineers encourage to write their own tests
  * possibility to enroll visual regression tests
* [Sentry](https://sentry.io/) as JavaScript error reporting tool
  * when some unfortunate error appears on production it's automatically reported
* [Codecov](https://codecov.io/) test coverage reporting tool
  * make sure unit tests coverage for app pass declared threshold
  * if certain threshold is not satisfied code can't be merged
* Performance / accessibility insights with [Lighthouse](https://github.com/GoogleChromeLabs/lighthousebot)
  * done on each pull request automatically
* Application styled with [styled-components](https://www.styled-components.com/)
  * each component has it's own isolated style
  * compose components not styles -- prevents huge amount of duplication in large codebases
* Automatic code formatting with [prettier](https://prettier.io/)
  * no more arguments such as tabs vs spaces, single quotes vs double, etc.
  * more pleasant to work with codebase

Most of listed tools provide good integration with Slack and Jira.

### Taking it further
Because of React's component-based architecture it is easy to reuse them, keep **user interface consistent** and reduce overall duplication. In future it will be possible to introduce fully featured **Design System** -- company-wide guideline of how to build digital products ([design system example](https://www.lightningdesignsystem.com/)).

## Getting started!
A few easy steps to set up a project:

* Make sure you've got **Node** installed, preferably version above **10**
* Run `npm install` from project root
* Copy **.env.local** from *gist* and replace **.env.local.temp** with it

Most useful scripts for development:

* `npm start` - starts the project in a development mode
* `npm test` - fires up Jest test runner

Other scripts which may be helpful:
* `styleguide:dev` - fires up development version of styleguide
* `e2e:dev` - runs all e2e tests locally
* `npm run start:build` -  starts a production version of app locally
* `npm run test:update` -  updates all snapshots from scratch
* `npm run format` - formats whole codebase with prettier

## Conventions

### Issuing PR
Please make sure that your **branch** names are correct. For example: `feature/krc-10-cart-icon-component` -- start with type of PR (*feature/fix/chore*) followed by a slash, followed by Jira issue ID and a very short description at the end.
For the *pull request* title use Jira ID in brackets followed by short description: `[KRC-10] Cart icon component`. Put short summary of your contribution in PR's description field and in case of *components* attach a screenshot.

### Coding style
Please follow a few simple rules (prettier and linter takes care of the rest):
* use regular **function()** instead of **arrow functions** at the top level (applies for functional components as well)
* use **arrow functions** for anonymous functions
* for targeting components directly in tests (e2e and unit) use **data-testid** property, for example: `<button data-testid="next-step-button">Next step</button>`
* follow TODO comments with @ symbol and your GitHub handle, for instance: `// TODO Implement something important @myhandle`
* separate external and internal imports with new line
* keep your imports order correct -- the higher a file is in directory structure, the higher on the list it should be:
```
import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../Item';
import Price from './Price';
```
