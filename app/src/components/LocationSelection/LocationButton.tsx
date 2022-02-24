import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Icon, Flex, useColorMode } from "native-base";

import { FontAwesome } from "@expo/vector-icons";

function LocationButton({ fsa }) {
	const { colorMode, toggleColorMode } = useColorMode();
	let textColour = colorMode === "dark" ? "white" : "black";

	return (
		<Flex direction="row" my="2">
			<Button w="10" style={styles.button} leftIcon={<Icon ml="2" name="minus" as={FontAwesome} size="xs" />}></Button>
			<Text px="3" my="0.2" style={styles.text} color={colorMode === "dark" ? "white" : "black"}>
				{fsa}
			</Text>
		</Flex>
	);
}

export default LocationButton;

const styles = StyleSheet.create({
	button: {
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
	},
	text: {
		border: "rgb(239, 68, 68) solid 1px"
	}
});
