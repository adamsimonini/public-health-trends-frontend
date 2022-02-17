// aliasing in expo: https://zohaib.me/using-path-aliases-in-react-native-typescript-created-with-expo/

module.exports = function (api) {
	api.cache(true);

	const presets = ["babel-preset-expo"];
	const plugins = [
		[
			"module-resolver",
			{
				root: ["."],
				extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".tsx", ".jsx", ".js", ".json"],
				alias: {
					tests: ["./tests/"],
					"@components": "./src/components",
					"@theme": "./src/theme",
					"@utils": "./src/utils"
				}
			}
		]
	];
	return {
		presets,
		plugins
	};
};
