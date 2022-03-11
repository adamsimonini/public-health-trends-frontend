// aliasing in expo: https://zohaib.me/using-path-aliases-in-react-native-typescript-created-with-expo/

module.exports = function (api) {
	api.cache(true);

	const presets = ["module:metro-react-native-babel-preset"];
	const plugins = [
		[
			"module-resolver",
			{
				root: ["."],
				extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".tsx", ".jsx", ".js", ".json"],
				alias: {
					tests: ["./tests/"],
					"@": "./",
					"@assets": "./assets",
					"@components": "./src/components",
					"@screens": "./src/screens",
					"@store": "./src/store",
					"@theme": "./src/theme",
					"@translation": "./src/translation",
					"@utils": "./src/utils",
				}
			}
		]
		// "react-native-reanimated/plugin"
	];
	return {
		presets,
		plugins
	};
};
