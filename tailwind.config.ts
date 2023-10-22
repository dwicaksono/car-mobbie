import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"finology-green": "rgb(46, 214, 194)",
				"finology-blue": "rgb(55, 121, 222)",
				glass: "rgba(255,255,255,0.35)",
			},
		},
	},
	plugins: [],
};
export default config;
