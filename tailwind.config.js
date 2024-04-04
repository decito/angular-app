/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'hsl(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				success: 'rgb(var(--color-success) / <alpha-value>)',
				warning: 'rgb(var(--color-warning) / <alpha-value>)',
				danger: 'rgb(var(--color-danger) / <alpha-value>)',
				disabled: 'rgb(var(--color-disabled) / <alpha-value>)',
				canvas: 'hsl(var(--color-canvas) / <alpha-value>)',
				sidebar: 'hsl(var(--color-sidebar) / <alpha-value>)',
				card: 'hsl(var(--color-card) / <alpha-value>)'
			}
		}
	}
}
