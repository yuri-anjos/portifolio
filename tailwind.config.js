/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos JS, TS, JSX e TSX dentro da pasta src
	],
	theme: {
		extend: {
			colors: {
				"app-primary": "var(--primary)",
				"app-secondary": "var(--secondary)",
				"app-black": "var(--black)",
				"app-black-2": "var(--black-2)",
				"app-bg": "var(--bg)",
				"app-bg-2": "var(--bg-2)",
				"app-bg-contrast": "var(--bg-contrast)",
				"app-border": "var(--border)",
				"app-link": "var(--link)",
				"app-text": "var(--text)",
				"app-text-2": "var(--text-2)",
			},
		},
	},
	plugins: [],
};
