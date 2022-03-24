import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Icon, Flex, useColorMode } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
// import { useSelector, useDispatch } from "react-redux";
// import Actions from "@store/actions/";

function LocationButton({ fsa, removeLocation }) {
	const { colorMode, toggleColorMode } = useColorMode();
	let textColour = colorMode === "dark" ? "white" : "black";
	// const storeLocations = useSelector(state => state.location);
	// const dispatch = useDispatch();

	const handleClick = () => {
		removeLocation(fsa);
	};

	return (
		<Flex direction="row" my="2">
			<Button w="10" style={styles.button} onPress={handleClick} leftIcon={<Icon w="100%" h="100%" ml="2" name="close" as={FontAwesome} size="xs" />}></Button>
			<Text borderWidth="1" px="3" my="0.2" w="20" style={styles.text} color={colorMode === "dark" ? "white" : "black"}>
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
		borderColor: "#EE4444",
		borderStyle: "solid",
		textAlign: "center"
	}
});
