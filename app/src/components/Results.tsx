import * as React from "react";
import { useColorMode, useBreakpointValue, useColorModeValue, Text } from "native-base";
import VictoryChart from "@components/VictoryChart";
import Panel from "@components/Panel/Root";
// import Graph from "@components/Graph";
import FilterPanel from "./Filters/FilterPanel";
import LocationFilter from "./Filters/Location/LocationFilter";
import { data } from "@components/Panel/data";

function Results() {
	const myArry = [1, 2, 3, 4, 5];
	const myJSONArr = data;
	return (
		<>
			{/* <FilterPanel /> */}
			{myJSONArr.map((data, i) => {
				return <Panel data={data} key={i} />;
			})}
			{/* <Graph health_data={myJSONArr} /> */}
			{/* <VictoryChart /> */}
		</>
	);
}

export default Results;
