import { extendTheme, themeTools } from "native-base";
// custom theme https://docs.nativebase.io/3.0.x/customizing-theme
// dark mode compatibility https://docs.nativebase.io/3.0.x/dark-mode
// NativeBase default theme https://docs.nativebase.io/default-theme
export const BaseTheme = extendTheme({
	components: {
		Button: {
			// Can simply pass default props to change default behaviour of components.
			baseStyle: (props: any) => {
				return {
					color: themeTools.mode("red.300", "blue.300")(props),
					size: "md"
				};
			},
			defaultProps: {
				colorScheme: "red"
			}
		},
		Text: {
			defaultProps: {
				fontSize: "lg"
			}
		},
		Heading: {
			// Can pass also function, giving you access theming tools
			baseStyle: (props: any) => {
				return {
					color: themeTools.mode("black", "white")(props)
				};
			}
		}
	},
	colors: {
		// Add new color
		canRed: {
			50: "#ffe2ec",
			100: "#ffb3c5",
			200: "#fc839f",
			300: "#f95278",
			400: "#f62252",
			500: "#dd0939",
			600: "#ad032c",
			700: "#7c001e",
			800: "#4d0012",
			900: "#200005"
		},
		// Redefinig only one shade, rest of the color will remain same.
		amber: {
			400: "#d97706"
		},
		talk: {
			400: "#003F5E"
		}
	},
	Pressable: {
		cursor: "pointer"
	},

	config: {
		// Changing initialColorMode to 'dark'
		initialColorMode: "light"
	}
});
