import React from "react";
import "react-native-reanimated";
import { Box, Stack, Container, Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import { BaseTheme } from "@theme/index";
// import VictoryChart from "./components/VictoryChart";
import Root from "@components/Root";
import API from "@utils/API";
import config from "@/nativebase.config";

// https://builderx.io/?utm_source=github&utm_medium=kitchensink&utm_campaign=kitchensink

export default function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<NativeBaseProvider theme={BaseTheme} config={config}>
			<Root />
		</NativeBaseProvider>
	);
}
