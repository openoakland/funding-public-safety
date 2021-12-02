// - Add eleventy nav plugin -
// const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const basePath = (process.env.ELEVENTY_ENV === 'prod') ? '/funding-public-safety/' : '/'

module.exports = function (eleventyConfig) {

  //  Add 11ty nav plugin cont.
  //eleventyConfig.addPlugin(pluginNavigation);

  // - define css -
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  // - define assets -
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // - input/output customization -
  return {
    pathPrefix: basePath,
    dir: {
      input: "src",
      output: "docs"
    },

    // - Append URL with GitHub Pages prefix -
  //  pathPrefix: "/funding-public-safety/"
  };


};
