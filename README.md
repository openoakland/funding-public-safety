# Welcome to Funding Public Safety

Funding Public Safety explores how Oakland spends Measure Z’s approximately $24 million annual budget, so Oaklanders can better understand the City’s approach to public safety and violence prevention. We're a project of [OpenOakland](https://openoakland.org), a volunteer collective that bridges community and technology for a thriving and equitable Oakland.

## Technology used

- [Eleventy (11ty)](https://www.11ty.dev/) static site generator
- [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) templating (but 11ty accepts multiple templating languages if you prefer your own comfort zone)
- [Bootstrap 5.1](https://getbootstrap.com/docs/5.1) css styles

## Contributing

All contributors are expected to adhere to OpenOakland's [Code of Conduct](https://openoakland.org/code-of-conduct/). This emphasizes a collaborative, participatory approach to project development. We're here to support each other as a community and we take this CoC seriously. We appreciate your understanding and shared commitment.

### Getting started

These instructions assume you have a beginner-level familiarity with GitHub and the command line.

On your local system:

1. Clone the `funding-public-safety` repo.

In Terminal or other command line interface:

2. Navigate to local directory: `cd {file-path}`
3. Install necessary packages: `npm install`
4. Run server: `npm run serve`

In your web browser:

5. Visit `localhost:8080` to view the site locally. You're now up and running!

### Working on the site

- Always remember to pull the latest version from `main` branch before beginning to work: `git pull origin main`.
- Before editing any files, create a new branch named with a clear summary of the changes being implemented (e.g. `update-about-content` or `feature-polling`).
- Design/build changes should be made within the `/src` directory. Site-wide configuration changes should be made with caution in `package.json` and `eleventy.js` files.
- When your changes are ready for review, open a pull request in GitHub and request a review from anyone on the team. Please give us about 48 hours to follow up.

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
