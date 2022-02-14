import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Box, Heading } from "native-base";

const SplayData = (props: any) => {
	let data = [];
	console.log(props);
	for (let i = 0; i < props.location.length; i++) {
		data.push(<Text key={props.location[i].name_en}>{props.location[i].name_en}</Text>);
	}

	return (
		<View style={styles.container}>
			{props.location[0] && <Heading size="lg">API Call Results</Heading>}
			<Box alignSelf="center" bg="primary.100">
				{data}
			</Box>
		</View>
	);
};

export default SplayData;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5fcff"
	}
});
