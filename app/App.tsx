import React from "react";
import { Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import axios from "axios";
const baseUrl = "http://localhost:8000/";

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: "dark"
};

axios({
	method: "get",
	url: `${baseUrl}api/provinces/`
}).then(response => {
	console.log(response.data);
});

axios({
	method: "get",
	url: `${baseUrl}api/health_regions/`
}).then(response => {
	console.log(response.data);
});

axios({
	method: "get",
	url: `${baseUrl}api/regions/`
}).then(response => {
	console.log(response.data);
});

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
	return (
		<NativeBaseProvider>
			<Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
				<VStack space={5} alignItems="center">
					<NativeBaseIcon />
					<Heading size="lg">Welcome to NativeBase! Sweet!</Heading>
					<HStack space={2} alignItems="center">
						<Text>Edit</Text>
						<Code>App.tsx</Code>
						<Text>and save to reload.</Text>
					</HStack>
					<Link href="https://docs.nativebase.io" isExternal>
						<Text color="primary.500" underline fontSize={"xl"}>
							Learn NativeBase
						</Text>
					</Link>
					<ToggleDarkMode />
				</VStack>
			</Center>
		</NativeBaseProvider>
	);
}

// Color Switch Component
function ToggleDarkMode() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack space={2} alignItems="center">
			<Text>Dark</Text>
			<Switch isChecked={colorMode === "light" ? true : false} onToggle={toggleColorMode} aria-label={colorMode === "light" ? "switch to dark mode" : "switch to light mode"} />
			<Text>Light</Text>
		</HStack>
	);
}
