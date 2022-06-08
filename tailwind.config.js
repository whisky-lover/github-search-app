module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				darkBlue: "#06283D",
				blue: "#1363DF",
				lightBlue: "#47B5FF",
				veryLightBlue: "#DFF6FF",
			},
		},
	},
	plugins: [],
};
