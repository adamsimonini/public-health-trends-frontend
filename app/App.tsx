import React, { useEffect, useState } from "react";
import { Stack, Container, Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import { BaseTheme } from "@theme";
// import NativeBaseIcon from "@components/NativeBaseIcon";
// import VictoryChart from "./components/VictoryChart";
// import SplayData from "@components/SplayData";
import Root from "@components/Root";
import API from "@utils/API";
import config from "./nativebase.config";

// https://builderx.io/?utm_source=github&utm_medium=kitchensink&utm_campaign=kitchensink

export default function App() {
	return (
		<NativeBaseProvider theme={BaseTheme}>
			<Root />
		</NativeBaseProvider>
	);
}
