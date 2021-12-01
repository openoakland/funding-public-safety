module.exports = function (eleventyConfig) {

  // - define css -
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  // - define assets -
  eleventyConfig.addPassthroughCopy("assets");

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("./src/assets/images");

  // - input/output customization -
  return {
    dir: {
      input: "src",
      output: "docs"
    },

    // - Append URL with GitHub Pages prefix -
    pathPrefix: "/funding-public-safety/"
  };

  // - Add eleventy nav plugin -
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);


};
