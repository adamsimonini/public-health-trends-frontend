import React, { useEffect, useState } from "react";
import { Stack, Container, Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import NativeBaseIcon from "@components/NativeBaseIcon";
import VictoryChart from "./components/VictoryChart";
import SplayData from "@components/SplayData";
import API from "@utils/API";

// https://builderx.io/?utm_source=github&utm_medium=kitchensink&utm_campaign=kitchensink

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
		API.getAllHealthRegions().then((res: any) => {
			setHealthRegionData(res);
		});
	};

	const loadProvinces = () => {
		API.getAllProvinces().then((res: any) => {
			setProvinceData(res);
		});
	};

	const loadRegions = () => {
		API.getAllRegions().then((res: any) => {
			setRegionData(res);
		});
	};

	useEffect(() => {
		loadHealthRegions();
		loadProvinces();
		loadRegions();
	}, []);

	return (
		<NativeBaseProvider>
			<Container>
				<Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
					<VStack space={5} alignItems="center">
						<NativeBaseIcon />
						<Heading size="lg">Welcome to NativeBase! Hello, World!</Heading>
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
						<Container>
							<VStack space="2.5" mt="4" px="8">
								<Heading size="lg">API Results</Heading>
								<Stack direction="column" mb="2.5" mt="1.5" space={3}>
									<Center
										_dark={{ bg: "blueGray.900" }}
										_light={{ bg: "blueGray.50" }}
										rounded="sm"
										_text={{
											color: "warmGray.50",
											fontWeight: "medium"
										}}
										shadow={"3"}
									>
										<Heading size="lg">Health Region</Heading>
										<SplayData apiResult={healthRegionData} />
									</Center>
									{/* <Center
									_dark={{ bg: "blueGray.900" }}
									_light={{ bg: "blueGray.50" }}
									rounded="sm"
									_text={{
										color: "warmGray.50",
										fontWeight: "medium"
									}}
									shadow={"3"}
								>
									<Heading size="lg">Province</Heading>
									<SplayData apiResult={provinceData} />
								</Center>
								<Center
									_dark={{ bg: "blueGray.900" }}
									_light={{ bg: "blueGray.50" }}
									rounded="sm"
									_text={{
										color: "warmGray.50",
										fontWeight: "medium"
									}}
									shadow={"3"}
								>
									<Heading size="lg">Region</Heading>
									<SplayData apiResult={regionData} />
								</Center> */}
								</Stack>
							</VStack>
						</Container>
					</VStack>
					{/* <VictoryChart /> */}
				</Center>
			</Container>
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
