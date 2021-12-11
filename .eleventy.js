module.exports = function (eleventyConfig) {


  // - define css -
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("src/css/");

  // - define assets -
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // - input/output customization -
  return {
    pathPrefix: "/funding-public-safety/", // - Append URL with GitHub Pages prefix -
    dir: {
      input: "src",
      output: "docs"
    },
  };


};
