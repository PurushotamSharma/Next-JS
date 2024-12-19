/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	theme: {
	  container: {
		center: true,
		padding: '15px',
		screens: {
		  sm: '640px',
		  md: '768px',
		  lg: '960px',
		  xl: '1200px'
		}
	  },
	  fontFamily: {
		primary: 'var(--font-jetbrainsMono)',
		mono: 'var(--font-jetbrainsMono)'
	  },
	  extend: {
		colors: {
		  primary: '#1c1c22',
		  accent: {
			DEFAULT: '#00ff99',
			hover: '#00e187'
		  }
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		  'grid-pattern': 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)'
		},
		animation: {
		  'gradient-y': 'gradient-y 6s ease infinite',
		},
		keyframes: {
		  'gradient-y': {
			'0%, 100%': {
			  'background-size': '400% 400%',
			  'background-position': 'center top'
			},
			'50%': {
			  'background-size': '200% 200%',
			  'background-position': 'center center'
			}
		  }
		}
	  }
	},
	plugins: [
	  require("tailwindcss-animate")
	]
  }