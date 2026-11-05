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
		primary: 'var(--font-inter)',
		sans: 'var(--font-inter)',
		display: 'var(--font-display)',
		mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
	  },
	  extend: {
		colors: {
		  primary: '#FFFFFF',
		  /* 'white' is remapped to the ink colour so the existing text-white/xx and border-white/xx classes read as dark text on the light theme */
		  white: '#171717',
		  ink: '#171717',
		  snow: '#FFFFFF',
		  surface: '#F5F5F3',
		  line: '#E7E5E2',
		  accent: {
			DEFAULT: '#F2542D',
			hover: '#D9431D',
			soft: '#FDECE6'
		  }
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		  'grid-pattern': 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)'
		},
		animation: {
		  'gradient-y': 'gradient-y 6s ease infinite',
		  'marquee': 'marquee 32s linear infinite',
		  'float': 'float 5s ease-in-out infinite',
		  'float-slow': 'float 7s ease-in-out infinite',
		  'wave': 'wave 2.4s ease-in-out infinite',
		},
		keyframes: {
		  'marquee': {
			'0%': { transform: 'translateX(0)' },
			'100%': { transform: 'translateX(-50%)' }
		  },
		  'wave': {
			'0%, 60%, 100%': { transform: 'rotate(0deg)' },
			'10%, 30%': { transform: 'rotate(16deg)' },
			'20%, 40%': { transform: 'rotate(-8deg)' }
		  },
		  'float': {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-8px)' }
		  },
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