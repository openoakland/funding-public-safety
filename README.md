# Welcome to Funding Public Safety

Funding Public Safety explores how Oakland spends Measure Z’s approximately $24 million annual budget, so Oaklanders can better understand the City’s approach to public safety and violence prevention. We're a project of [OpenOakland](https://openoakland.org), a volunteer collective that bridges community and technology for a thriving and equitable Oakland.

See the [live site](https://openoakland.github.io/funding-public-safety/) for this project.

## Technology used

- [Eleventy (11ty)](https://www.11ty.dev/) static site generator
- [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) templating (but 11ty accepts multiple templating languages if you prefer your own comfort zone)
- [Bootstrap 5.1](https://getbootstrap.com/docs/5.1) css styles

## Contributing

All contributors are expected to adhere to OpenOakland's [Code of Conduct](https://openoakland.org/code-of-conduct/). This emphasizes a collaborative, participatory approach to project development. We're here to support each other as a community and we take this CoC seriously. We appreciate your understanding and shared commitment.

### Getting started

These instructions assume you have a beginner-level familiarity with GitHub and the command line.

On your local system:

1. Create a fork of the original repo from `https://github.com/openoakland/funding-public-safety`
2. Clone your fork of the `funding-public-safety` repo to create a local copy of the code.

In Terminal or other command line interface:

3. Navigate to local directory: `cd ~/{file-path}`
4. Install necessary packages: `npm install`
5. Build the site: `npm build`
6. Run the server: `npm start`

In your web browser:

5. Visit `localhost:8080` to view the site locally. You should now be up and running!

\_Running into issues? Reach out in the #project-active-funding-public-safety Slack channel (see [instructions for joining Slack](https://docs.google.com/document/d/1VWZQ_3ehP5j0IOTY0nJClvQPll3ivSkuAdh5YsOhO_U/edit)).

### Working on the site

Assumes you're using Terminal/command line and have completed the `Getting Started` section above...

1. Navigate to your local directory:

- `cd ~/{file-path}/funding-public-safety`

2. Create and check out a new branch based on `main` branch:

- `git status` (tells you which branch you're on)
- `git checkout main` (checks out the `main` if you're not already there)
- Pull in the latest changes from the `main` (upstream) repo. [See these instructions](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) for how to do this via Github UI or command line.
- `git checkout -b {new-branch-name}` (creates and checks out a new branch based on `main`; branch name should reflect a concise summary of the general changes being implemented; e.g. `update-about-content` or `feature-polling`)

1. Design/build changes should be made within the `/src` directory using your preferred text editor. Site-wide configuration changes should be made with caution in `package.json` and `eleventy.js` files.

2. When your changes are ready for review, open a pull request in GitHub and request a review from anyone on the team. Please give us about 48 hours to follow up.

### Site structure and styles

- Site pages are built in markdown using Nunjucks templating (but Eleventy accepts lots of templating languages so if you have a preference you may use what you're comfortable with).
- All pages must include specific front matter:
  - `layout`: which layout template to use from `_includes` (usually `page.njk`)
  - `title`: page title, which will show up as an `<h1>` header
  - `key`: Label to use in global nav (if you want the page to appear here)
  - `order`: Position of the page in the global nav menu
- Our default styling uses [Bootstrap 5.1](https://getbootstrap.com/docs/5.1/). Customizations can be added to `/src/css/style.css`.

## Contact the team

- The FPS team can be reached at [fundingpublicsafety@openoakland.org](mailto:fundingpublicsafety@openoakland.org).
- OpenOakland leadership can be reached at [steering@openoakland.org](mailto:steering@openoakland.org).
- Everyone is welcome to join our [weekly meetups](https://www.meetup.com/openOakland/events).
