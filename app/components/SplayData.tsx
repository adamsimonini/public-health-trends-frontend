import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Box, Heading, NativeBaseProvider, Center, VStack, extendTheme, useColorModeValue } from "native-base";

const config = {
	useSystemColorMode: false,
	initialColorMode: "dark"
};

export const theme = extendTheme({ config });

const SplayData = (props: any) => {
	let data = [];
	console.log(JSON.stringify(props));
	for (let i = 0; i < props.location.length; i++) {
		data.push(<Text key={props.location[i].name_en}>{props.location[i].name_en}</Text>);
	}

	return (
		<Center px={4} flex={1}>
			<VStack space={5} alignItems="center">
				<Heading size="lg">API Call Results</Heading>
				<Text alignSelf="center">{data}</Text>
			</VStack>
		</Center>
	);
};

export default SplayData;
