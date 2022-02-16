import React from "react";
// import { StyleSheet, View } from "react-native";
import { Flex, Text, Box, Center, VStack, extendTheme } from "native-base";

const config = {
	useSystemColorMode: false,
	initialColorMode: "dark"
};

export const theme = extendTheme({ config });

const SplayData = (props: any) => {
	let apiData: any = [];
	for (let index in props.apiResult) {
		let result = props.apiResult[index];
		let keys = Object.keys(result);
		keys.forEach(key => {
			apiData.push(
				<Box key={`${index}-${key}`}>
					<Flex alignItems="center" direction="row">
						<Text bold key={`${result[key]}-${key}}`}>
							{`${key}: `}
						</Text>
						<Text key={`${result[key]}`}>{result[key]}</Text>
					</Flex>
				</Box>
			);
		});
	}

	return (
		<Box px={4} flex={1}>
			<VStack space={5} alignItems="center">
				{apiData}
			</VStack>
		</Box>
	);
};

export default SplayData;
