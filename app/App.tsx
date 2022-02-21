import React from "react";
import { Stack, Container, Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import { BaseTheme } from "./src/theme/index";
// import VictoryChart from "./components/VictoryChart";
import Root from "@components/Root";
import API from "@utils/API";
import config from "./nativebase.config";

// https://builderx.io/?utm_source=github&utm_medium=kitchensink&utm_campaign=kitchensink

export default function App() {
	return (
		<NativeBaseProvider>
			{/* <Text>Hello</Text> */}
			<Root />
		</NativeBaseProvider>
	);
}
