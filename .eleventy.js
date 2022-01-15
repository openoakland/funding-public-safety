module.exports = function (eleventyConfig) {


  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addPassthroughCopy("src/css"); // - define css folder -
  eleventyConfig.addPassthroughCopy("src/assets/images"); // - define assets folder -

  // - input/output customization -
  return {
    dir: {
      input: "src",
      output: "docs",
    pathPrefix: "/funding-public-safety/", // - Append URL with GitHub Pages prefix -
    },
  };


};
