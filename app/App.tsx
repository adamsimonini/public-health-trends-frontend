import React from "react";
import { Box, Stack, Container, Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code, Button } from "native-base";
import * as Localization from "expo-localization";
import { BaseTheme } from "@theme";
// import VictoryChart from "./components/VictoryChart";
import Root from "@components/Root";
import API from "@utils/API";
import config from "@/nativebase.config";

// expo's localization solution: https://docs.expo.dev/versions/latest/sdk/localization/

export default function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<NativeBaseProvider theme={BaseTheme} config={config}>
			<Root localization={Localization} />
		</NativeBaseProvider>
	);
}
