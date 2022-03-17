import * as React from "react";
import { useColorMode, useBreakpointValue, useColorModeValue, Text } from "native-base";
import VictoryChart from "@components/VictoryChart";
import Panel from "@components/Panel";

function Results() {
	const myArry = [1, 2, 3, 4, 5];
	const myJSONArr = [
		{
			hr_name: "Toronto Health Unit",
			deaths: "55",
			cases: "66"
		},
		// {
		// 	hr_name: "Toronto Health Unit",
		// 	metrics: {
		// 		deaths: "55",
		// 		cases: "66"
		// 	}
		// },
		{
			hr_name: "Toronto Health Unit",
			deaths: "55",
			cases: "66"
		},
		{
			hr_name: "Toronto Health Unit",
			deaths: "55",
			cases: "66"
		},
		{
			hr_name: "Toronto Health Unit",
			deaths: "55",
			cases: "66"
		}
	];
	return (
		<>
			<Text>RESULTS!!!!</Text>
			{myJSONArr.map((hr, i) => {
				return <Panel hr={hr} key={i} />;
			})}
			<VictoryChart />
		</>
	);
}

export default Results;
