import {
	assignVars,
	createThemeContract,
	globalStyle,
} from "@macaron-css/core";

export const vars = createThemeContract({
	color: {
		fore: {
			brand: null,
			primary: null,
			secondary: null,
		},
		back: {
			brand: null,
			primary: null,
			secondary: null,
		},
	},
	space: {
		sm: null,
		md: null,
		lg: null,
		xl: null,
	},
	size: {
		sm: null,
		md: null,
		lg: null,
		xl: null,

		icon: null,
	},
});

globalStyle("*", {
	boxSizing: "border-box",
	margin: 0,
});

globalStyle(":root", {
	fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
	lineHeight: "1.5rem",
	fontWeight: 400,

	colorScheme: "light dark",

	fontSynthesis: "none",
	textRendering: "optimizeLegibility",
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",

	"@media": {
		"(prefers-color-scheme: light)": {
			vars: assignVars(vars, {
				color: {
					fore: {
						brand: "hsl(0 0% 100%)",
						primary: "hsl(215 10% 10%)",
						secondary: "hsl(215 10% 30%)",
					},
					back: {
						brand: "hsl(22 100% 53%)",
						primary: "hsl(0 0% 100%)",
						secondary: "hsl(215 5% 90%)",
					},
				},
				space: {
					sm: "0.2rem",
					md: "0.5rem",
					lg: "1.0rem",
					xl: "1.5rem",
				},
				size: {
					sm: "0.2rem",
					md: "0.5rem",
					lg: "1.0rem",
					xl: "1.5rem",

					icon: "2.0rem",
				},
			}),
		},
		"(prefers-color-scheme: dark)": {
			vars: assignVars(vars, {
				color: {
					fore: {
						brand: "hsl(0 0% 100%)",
						primary: "hsl(215 10% 10%)",
						secondary: "hsl(215 10% 30%)",
					},
					back: {
						brand: "hsl(22 100% 53%)",
						primary: "hsl(0 0% 100%)",
						secondary: "hsl(215 5% 90%)",
					},
				},
				space: {
					sm: "0.2rem",
					md: "0.5rem",
					lg: "1.0rem",
					xl: "1.5rem",
				},
				size: {
					sm: "0.2rem",
					md: "0.5rem",
					lg: "1.0rem",
					xl: "1.5rem",

					icon: "2.0rem",
				},
			}),
		},
	},
});
