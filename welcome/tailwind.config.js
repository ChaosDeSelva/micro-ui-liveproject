const plugin = require('tailwindcss/plugin')

const capitalizeFirst = plugin(function ({ addUtilities }) {
	const newUtilities = {
		'.capitalize-first:first-letter': {
			textTransform: 'uppercase',
		},
	}
	addUtilities(newUtilities, ['responsive', 'hover'])
})

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			fontSize: {
				'18xl': '16rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [capitalizeFirst],
}
