const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				// fadeIn 0.45s ease-in-out 0.5s both;
				'fade-in': 'fadeIn 0.45s ease-in-out both',
				'fade-in-1': 'fadeIn 0.45s ease-in-out 0.5s both',
				'fade-in-2': 'fadeIn 0.45s ease-in-out 0.7s both',
				'fade-in-3': 'fadeIn 0.45s ease-in-out 0.9s both',
				'fade-in-4': 'fadeIn 0.45s ease-in-out 1.5s both',
				'fade-in-5': 'fadeIn 0.45s ease-in-out 2s both',
				'slide-in': 'slideIn 0.45s ease-in-out both',
				'slide-in-1': 'slideIn 0.45s ease-in-out 0.5s both',
				'slide-in-2': 'slideIn 0.45s ease-in-out 0.7s both',
				'slide-in-3': 'slideIn 0.45s ease-in-out 0.9s both',
				'slide-in-4': 'slideIn 0.45s ease-in-out 1.5s both',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideIn: {
					'0%': { transform: 'translateX(-100%)' , opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				}
			},
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
				'h1,h2,h3,h4,h5,h6': { fontWeight: '700', fontFamily: 'Georgia, serif' , marginTop: '16px'},
				'p': { fontFamily: 'Arial, sans-serif' , marginTop: '8px'},
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
