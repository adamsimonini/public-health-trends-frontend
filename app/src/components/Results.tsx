import * as React from "react";
import { useColorMode, useBreakpointValue, useColorModeValue, Text } from "native-base";
import VictoryChart from "@components/VictoryChart";
import Panel from "@components/Panel";
import Graph from "@components/Graph";
import FilterPanel from "./Filters/FilterPanel";
import LocationFilter from "./Filters/Location/LocationFilter";

function Results() {
	const myArry = [1, 2, 3, 4, 5];
	const myJSONArr = [
		{
			prov: "Alberta",
			prov_image: "https://media.istockphoto.com/photos/edmonton-downtown-skyline-just-after-sunset-in-the-winter-picture-id1089141884?b=1&k=20&m=1089141884&s=170667a&w=0&h=Nsi5U0CbId8kaoYK6asziDvpoIRME23vCi9aj1nsHNI=",
			hr_name: "Calgary",
			last_updated_date: "2021-07-30",
			metrics: {
				cases_since_last_update: "3000",
				average_monthly_cases: "113",
				deaths: "0"
			}
		},
		{
			prov: "Manitoba",
			prov_image: "https://www.worldatlas.com/r/w1200/upload/5a/d1/9d/winnipeg-manitoba.jpg",
			hr_name: "Winnipeg",
			last_updated_date: "2021-08-03",
			metrics: {
				cases_since_last_update: "3000",
				average_monthly_cases: "45",
				deaths: "2"
			}
		},
		{
			prov: "Ontario",
			prov_image: "https://www.tripsavvy.com/thmb/wdR55uljRmHMCpM26xB6rdDxxI8=/4003x3002/smart/filters:no_upscale()/parliament-hill-in-ottawa--ontario--canada-1212275972-9f6f6e45ce084df89aaebf972e15b27b.jpg",
			hr_name: "Hamilton",
			last_updated_date: "2021-08-04",
			metrics: {
				cases_since_last_update: "3000",
				average_monthly_cases: "11",
				deaths: "1"
			}
		},
		{
			prov: "Ontario",
			prov_image: "https://www.tripsavvy.com/thmb/wdR55uljRmHMCpM26xB6rdDxxI8=/4003x3002/smart/filters:no_upscale()/parliament-hill-in-ottawa--ontario--canada-1212275972-9f6f6e45ce084df89aaebf972e15b27b.jpg",
			hr_name: "Peel",
			last_updated_date: "2021-08-05",
			metrics: {
				cases_since_last_update: "3000",
				average_monthly_cases: "39",
				deaths: "13"
			}
		}
	];
	return (
		<>
			{/* <FilterPanel /> */}
			{myJSONArr.map((data, i) => {
				return <Panel JSONdata={data} key={i} />;
			})}
			{/* <Graph health_data={myJSONArr} /> */}
			{/* <VictoryChart /> */}
		</>
	);
}

export default Results;
