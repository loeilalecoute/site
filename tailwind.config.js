/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: '#70c2c0'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
