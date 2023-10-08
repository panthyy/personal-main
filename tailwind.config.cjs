const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: "#333333",
				white: "#FFFFFF",
				grey: "#F4F4F4",
				primary: "#2A4C6F",
				'primary-hover': "#1F3A54",
				secondary: "#E5EDF5",
				'secondary-hover': "#DCE6EE",
				accent: "#0973DC",
				'accent-hover': "#085FB6",
			}
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				'*': {
					color: '#333333',
					zIndex: '10',
				},
				'h1,h2,h3,h4,h5,h6': { fontWeight: '700', fontFamily: 'Georgia, serif' },
				'p': { fontFamily: 'Arial, sans-serif' },
				'h1,h2,h3': { lineHeight: '1.2' },
				'h4,h5,h6': { lineHeight: '1.4' },
				'h1': { fontSize: '3.5rem' },
				'h2': { fontSize: '3rem' },
				'h3': { fontSize: '2.5rem' },
				'h4': { fontSize: '2rem' },
				'h5': { fontSize: '1.5rem' },
				'h6': { fontSize: '1.25rem' },
				'a': { fontFamily: 'Arial, sans-serif' },
				'@media (max-width: 768px)': {
					'h1': { fontSize: '2.5rem' },
					'h2': { fontSize: '2.25rem' },
					'h3': { fontSize: '2rem' },
					'h4': { fontSize: '1.5rem' },
					'h5': { fontSize: '1.25rem' },
					'h6': { fontSize: '1.25rem' },
				},

			})
		})
	],
}
