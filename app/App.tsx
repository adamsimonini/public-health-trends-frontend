import React, { useEffect, useState } from "react";
import { Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import VictoryChart from "./components/VictoryChart";
import SplayData from "./components/SplayData";
import API from "./utils/API";

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: "dark"
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
	const [regionData, setRegionData] = useState([]);
	const [provinceData, setProvinceData] = useState([]);
	const [healthRegionData, setHealthRegionData] = useState([]);

	const loadHealthRegions = () => {
		API.getAllHealthRegions().then(res => {
			// console.log(res.data);
			setHealthRegionData(res.data);
		});
	};

	const loadProvinces = () => {
		API.getAllProvinces().then(res => {
			// console.log(res.data);
			setProvinceData(res.data);
		});
	};

	const loadRegions = () => {
		API.getAllRegions().then(res => {
			// console.log(res.data);
			setRegionData(res.data);
		});
	};

	useEffect(() => {
		loadHealthRegions();
		loadProvinces();
		loadRegions();
	}, []);

	return (
		<NativeBaseProvider>
			<Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
				<VStack space={5} alignItems="center">
					<NativeBaseIcon />
					<Heading size="lg">Welcome to NativeBase! Hello, April! Hehehee</Heading>
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
					{/* <Text>{regionData[0].name_en}</Text> */}
					<SplayData location={regionData} />
					<SplayData location={provinceData} />
					<SplayData location={healthRegionData} />
				</VStack>
				<VictoryChart />
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
