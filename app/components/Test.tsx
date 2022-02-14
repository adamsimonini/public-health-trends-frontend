import React from "react";
import { StyleSheet, View } from "react-native";

function Test() {
	return (
		<View style={styles.container}>
			<h1>Test</h1>
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
