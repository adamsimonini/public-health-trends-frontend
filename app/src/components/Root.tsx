import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box, useColorModeValue, useToken, Text, Stack, Input, Center, HStack, Switch, useColorMode } from "native-base";
import NavDrawer from "@components/Navigation/NavDrawer";
import SplayData from "@components/SplayData";
import ThemeToggle from "@theme/ThemeToggle";
import * as Linking from "expo-linking";

// configuring links: https://reactnavigation.org/docs/configuring-links/
const prefix = Linking.createURL("/");
const linking = {
	prefixes: [prefix]
};

export default function Root(props) {
	const [lightBg, darkBg] = useToken("colors", ["coolGray.50", "blueGray.900"], "blueGray.900");
	const bgColor = useColorModeValue(lightBg, darkBg);
	const localization = props.localization;
	// https://reactnavigation.org/docs/themes/
	const phtTheme = {
		dark: false,
		colors: {
			primary: "rgb(255, 45, 85)",
			background: bgColor,
			card: bgColor,
			text: bgColor,
			border: "rgb(199, 199, 204)",
			notification: "rgb(255, 69, 58)"
		}
	};

	return (
		<NavigationContainer theme={phtTheme} linking={linking}>
			{/* <DesktopTab /> */}
			<Box
				w="100%"
				flex={1}
				_web={{
					overflowX: "hidden"
				}}
			>
				<NavDrawer />
				<ThemeToggle />
			</Box>
		</NavigationContainer>
	);
}
