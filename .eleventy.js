module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget('./src/css');
	eleventyConfig.addPassthroughCopy('./src/css'); // Copy css folder to output directory.
	eleventyConfig.addPassthroughCopy('./src/assets'); // Copy assets folder to output directory.

	// Given a path that is relative to the *root* directory, prepend "../" as
	// needed to construct a working URL based on the current page's URL.
	// For example, if you call this filter with {{ 'assets/pic.jpg' | relativeUrl }}:
	// - If the current page is at the site's root, the method will return 'assets/pic.jpg'.
	// - If the current page is nested two levels deep (e.g. a/b/my_page.html),
	//   the filter will return '../../assets/pic.jpg'.
	eleventyConfig.addFilter('relativeUrl', function (relativePath) {
		var nestLevel = this.ctx.page.url.split('/').length - 1;
		return Array(nestLevel).join('../') + relativePath;
	});

	// - input/output customization -
	return {
		pathPrefix: '/funding-public-safety/', // Append URL with repo prefix for GH Pages.

		dir: {
			input: 'src', // Tells 11ty to use /src folder
			output: 'docs', // Tells 11ty to build pages into the /docs folder.
		},
	};
};
