const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins: [
		require('autoprefixer'),
		purgecss({
			content: ['./**/*.html'],
			safelist: {
				greedy: [/^category-/],
				standard: [/^tag-/],
			}
		  }),
        require('cssnano')({
            preset: 'default',
        })
    ],
};