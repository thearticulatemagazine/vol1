const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins: [
		require('autoprefixer'),
		purgecss({
			content: ['./**/*.html'],
			safelist: {
				greedy: [/^category-/],
				standard: [/^tag-/],
				greedy: [/^snackbar/],
			}
		  }),
        require('cssnano')({
            preset: 'default',
        })
    ],
};