<img src="https://static.begin.app/node-personal-website/readme-banner.png" width="561">

> ##### Forked from [@smallwins/begin-starter-app](https://github.com/smallwins/begin-starter-app)

A fast, beautiful, customizable personal site running on Begin. Demonstrates server(less)-side rendering, shared components, and static assets.


<!-- ## The guide (coming soon!)

Head here to check out the complete guide to setting up and customizing your Begin personal site! -->


## Getting started working locally

- Initialize the repo + route dependencies: `npm i && npx hydrate`
  - Note: as you add routes, re-run `npx hydrate` to keep dependencies fresh
- To start your local dev server: `npm start`
- Learn more about [working locally](https://docs.begin.com/en/getting-started/working-locally/) and [the project structure of Begin apps](https://docs.begin.com/en/getting-started/project-structure/)


## Deploying your site

- Run Begin's build steps locally:
  - Lint your code: `npm run lint`
  - Run your tests: `npm t`
- Deploy to `staging`
  - Just commit and `git push` to `master`!
- Deploy to `production`:
  - Use the `Deploy to production` button in Begin, or
  - Bump your [npm version](https://docs.npmjs.com/cli/version): `npm version [patch|minor|major] && git push origin`
  - Cut your own git tag: `git tag -a 1.0.0 -m "1.0, here we come" && git push origin 1.0.0`


## Additional resources

- [Begin reference docs](https://docs.begin.com)
- [Quickstart](https://docs.begin.com/en/getting-started/quickstart/) - the basics on working locally, project structure, deploying, and accessing your Begin app
- Expand the capabilities of your app:
  - [Create new routes (aka cloud functions)](https://docs.begin.com/en/functions/creating-new-functions/)
  - [Add Begin Data](https://docs.begin.com/en/data/begin-data/)
- Get help:
  - [Begin community](https://spectrum.chat/begin)
  - [Issue tracker](https://github.com/smallwins/begin-issues/issues)


---


> _We all can't wait to see what you build with [Begin](https://begin.com)!_
