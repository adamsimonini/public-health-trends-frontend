import React from "react";
import { StyleSheet, View } from "react-native";
import Victory from "@utils/victory";

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 }
];

function Chart() {
	// platformSpecificCharting().then(data => {
	// 	t = data;
	// });
	// const VictoryVersion = Platform.OS === "web" ? VictoryNative : VictoryNative;
	return (
		<View style={styles.container}>
			<Victory.VictoryChart width={350} theme={Victory.VictoryTheme.material}>
				<Victory.VictoryBar data={data} x="quarter" y="earnings" />
			</Victory.VictoryChart>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5fcff"
	}
});

export default Chart;
