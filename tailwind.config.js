const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryClr:
					"linear-gradient(90deg, #059DFF 0%, #6549D5 20.31%, #E33FA1 49.03%, #FB5343 86.46%)",
				dashboardClr: "#ED4777",
				storeFrontClr: "#F9A01B",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			boxShadow: {
				"gradient-btn-hover":
					"9px 53px 15px rgba(133, 0, 66, 0.01), 6px 34px 14px rgba(133, 0, 66, 0.05), 3px 19px 12px rgba(133, 0, 66, 0.17), 1px 9px 9px rgba(133, 0, 66, 0.3), 0px 2px 5px rgba(133, 0, 66, 0.34), 0px 0px 0px rgba(133, 0, 66, 0.35)",
			},
			backgroundImage: {
				"gradient-btn":
					"linear-gradient(90deg, #059DFF 0%, #6549D5 20.31%, #E33FA1 49.03%, #FB5343 86.46%)",
			},
			animation: {
				gradientText: "gradientText 7s ease infinite",
			},
			keyframes: {
				gradientText: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-all"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")({
			strategy: "class", // only generate classes
		}),
	],
};
