const defaultTheme = require('tailwindcss/defaultTheme')

const codeNotProse = {
	'code::before': false,
	'code::after': false,
	'blockquote p:first-of-type::before': false,
	'blockquote p:last-of-type::after': false,
	'pre': false,
	'code': false,
	'pre code': false,
	'code::before': false,
	'code::after': false,
}

module.exports = {
  content: [
    './_drafts/**/*',
    './_includes/**/*',
    './_layouts/**/*',
    './_posts/*',
    './*.md',
    './*.html',
    './*.liquid'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: {
				DEFAULT: { css: codeNotProse },
				sm: { css: codeNotProse },
				lg: { css: codeNotProse },
				xl: { css: codeNotProse },
				'2xl': { css: codeNotProse },
			},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
