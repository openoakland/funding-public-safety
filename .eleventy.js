module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget('./src/css');
	eleventyConfig.addPassthroughCopy('./src/css'); // Copy css folder to output directory.
	eleventyConfig.addPassthroughCopy('assets'); // Copy assets folder to output directory.

	// - input/output customization -
	return {
		pathPrefix: '/funding-public-safety/', // Append URL with repo prefix for GH Pages.

		dir: {
			input: 'src', // Tells 11ty to use /src folder
			output: 'docs', // Tells 11ty to build pages into the /docs folder.
		},
	};
};
