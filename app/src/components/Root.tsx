import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box, useColorModeValue, useToken, Text } from "native-base";
import Home from "./Home";

export default function Root() {
	const [lightBg, darkBg] = useToken("colors", ["coolGray.50", "blueGray.900"], "blueGray.900");

	return (
		<NavigationContainer>
			<Box
				flex={1}
				w="100%"
				_light={{
					bg: "coolGray.50"
				}}
				_dark={{
					bg: "blueGray.900"
				}}
				bg={useColorModeValue("", "blueGray.900")}
				_web={{
					overflowX: "hidden"
				}}
			>
				<Text>Hello, world!</Text>
				<Home />
			</Box>
		</NavigationContainer>
	);
}
