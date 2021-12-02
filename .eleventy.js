// - Add eleventy nav plugin -
// const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {

  //  Add 11ty nav plugin cont.
  //eleventyConfig.addPlugin(pluginNavigation);

  // - define css -
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("src/css/");

  // - define assets -
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // - input/output customization -
  return {
    pathPrefix: "/funding-public-safety/"  // - Append URL with GitHub Pages prefix -
    dir: {
      input: "src",
      output: "docs"
    },
  };


};
