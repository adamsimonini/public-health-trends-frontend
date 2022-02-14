import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "native-base";

function Test() {
	return (
		<View style={styles.container}>
			<Text>Test 2</Text>
		</View>
	);
}

export default Test;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5fcff"
	}
});
