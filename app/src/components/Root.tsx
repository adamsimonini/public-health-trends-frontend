import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box, useColorModeValue, useToken, Text, Stack, Input, Center } from "native-base";
import Home from "@components/Home";
import Header from "@components/Header";
import SelectLocation from "@components/SelectLocation";
import NavBar from "@components/Navigation/NavBar";
import SplayData from "@components/SplayData";

export default function Root() {
	const [lightBg, darkBg] = useToken("colors", ["coolGray.50", "blueGray.900"], "blueGray.900");

	return (
		<Box
			flex={19}
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
			{/* <Box flex={1} w="100%"></Box>
			<Box flex={19} w="100%"> */}
			{/* <SplayData location="province" /> */}
			<NavBar />
			{/* <Header />
				<Center>
					<Text>Hello, world!</Text>
					<Home />
					<SelectLocation />
				</Center>
			</Box> */}
		</Box>
	);
}
