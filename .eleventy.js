module.exports = function (eleventyConfig) {


  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addPassthroughCopy("src/css/"); // - define css folder -
  eleventyConfig.addPassthroughCopy("src/assets/images"); // - define assets folder -

  // - input/output customization -
  return {
    pathPrefix: "/funding-public-safety/", // - Append URL with GitHub Pages prefix -
    dir: {
      input: "src",
      output: "docs"
    },
  };


};
