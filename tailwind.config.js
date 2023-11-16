const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,.md}'],
	theme: {
		extend: {
			height: {
				screen: ['100vh', '100svh']
			},
			minHeight: {
				screen: ['100vh', '100svh']
			},
			colors: {
				// blue: '#87cccb',
				blue: '#70c2c0',
				yellow: '#FCCC03'
			},
			fontFamily: {
				sans: ['Frequenz', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				xs: 'clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem)',
				sm: 'clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem)',
				base: 'clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)',
				lg: 'clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem)',
				xl: 'clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem)',
				'2xl': 'clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem)',
				'3xl': 'clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem)',
				'4xl': 'clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem)',
				'5xl': 'clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem)',
				'6xl': 'clamp(4.0313rem, 3.3602rem + 3.3554vw, 5.9606rem)',
				'7xl': 'clamp(4.8375rem, 3.9286rem + 4.5446vw, 7.4506rem)',
				'8xl': 'clamp(5.805rem, 4.5848rem + 6.1011vw, 9.3131rem)',
				'9xl': 'clamp(6.9656rem, 5.3393rem + 8.1315vw, 11.6413rem)'
			},
			transitionTimingFunction: {
				'ease-1': 'cubic-bezier(.25, 0, .5, 1)',
				'ease-2': 'cubic-bezier(.25, 0, .4, 1)',
				'ease-3': 'cubic-bezier(.25, 0, .3, 1)',
				'ease-4': 'cubic-bezier(.25, 0, .2, 1)',
				'ease-5': 'cubic-bezier(.25, 0, .1, 1)',

				'ease-in-1': 'cubic-bezier(.25, 0, 1, 1)',
				'ease-in-2': 'cubic-bezier(.50, 0, 1, 1)',
				'ease-in-3': 'cubic-bezier(.70, 0, 1, 1)',
				'ease-in-4': 'cubic-bezier(.90, 0, 1, 1)',
				'ease-in-5': 'cubic-bezier(1, 0, 1, 1)',

				'ease-out-1': 'cubic-bezier(0, 0, .75, 1)',
				'ease-out-2': 'cubic-bezier(0, 0, .50, 1)',
				'ease-out-3': 'cubic-bezier(0, 0, .3, 1)',
				'ease-out-4': 'cubic-bezier(0, 0, .1, 1)',
				'ease-out-5': 'cubic-bezier(0, 0, 0, 1)',

				'ease-in-out-1': 'cubic-bezier(.1, 0, .9, 1)',
				'ease-in-out-2': 'cubic-bezier(.3, 0, .7, 1)',
				'ease-in-out-3': 'cubic-bezier(.5, 0, .5, 1)',
				'ease-in-out-4': 'cubic-bezier(.7, 0, .3, 1)',
				'ease-in-out-5': 'cubic-bezier(.9, 0, .1, 1)',

				'ease-elastic-out-1': 'cubic-bezier(.5, .75, .75, 1.25)',
				'ease-elastic-out-2': 'cubic-bezier(.5, 1, .75, 1.25)',
				'ease-elastic-out-3': 'cubic-bezier(.5, 1.25, .75, 1.25)',
				'ease-elastic-out-4': 'cubic-bezier(.5, 1.5, .75, 1.25)',
				'ease-elastic-out-5': 'cubic-bezier(.5, 1.75, .75, 1.25)',

				'ease-elastic-in-1': 'cubic-bezier(.5, -0.25, .75, 1)',
				'ease-elastic-in-2': 'cubic-bezier(.5, -0.50, .75, 1)',
				'ease-elastic-in-3': 'cubic-bezier(.5, -0.75, .75, 1)',
				'ease-elastic-in-4': 'cubic-bezier(.5, -1.00, .75, 1)',
				'ease-elastic-in-5': 'cubic-bezier(.5, -1.25, .75, 1)',

				'ease-elastic-in-out-1': 'cubic-bezier(.5, -.1, .1, 1.5)',
				'ease-elastic-in-out-2': 'cubic-bezier(.5, -.3, .1, 1.5)',
				'ease-elastic-in-out-3': 'cubic-bezier(.5, -.5, .1, 1.5)',
				'ease-elastic-in-out-4': 'cubic-bezier(.5, -.7, .1, 1.5)',
				'ease-elastic-in-out-5': 'cubic-bezier(.5, -.9, .1, 1.5)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
