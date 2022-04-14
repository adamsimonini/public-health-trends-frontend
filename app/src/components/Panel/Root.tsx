import React from "react";
import { useColorMode, useBreakpointValue, useColorModeValue, Text } from "native-base";
import { VStack, Box, Container, Image, AspectRatio, Stack, Heading, HStack, Center, Divider, Flex } from "native-base";
import { useTranslation } from "react-i18next";
import MetricRow from "./MetricRow";

function DiseaseDataLine({ metric, metricName }) {
	const translateTitle = {
		cases_since_last_update: "Cases Since Last Update",
		average_monthly_cases: "Average Monthly Cases",
		deaths: "Deaths"
	};

	return (
		<Box alignItems="flex-start">
			<Box w="90%">
				<Heading mx="3" alignItems="center" flexDirection="row">
					{translateTitle[metricName]}
				</Heading>
				<Divider my="2" />
				<Heading mx="3" alignItems="center" flexDirection="row">
					{metric}
				</Heading>
			</Box>
		</Box>
	);
}

function DisplayPanelDiseaseData({ JSONdata }: any) {
	// console.log(typeof JSONdata);
	// console.log(JSONdata);

	return (
		<Box alignItems="flex-start">
			<Box w="500">
				{Object.keys(JSONdata.metrics).map(function (key, index) {
					return <DiseaseDataLine metric={JSONdata.metrics[key]} key={index} metricName={key} />;
				})}
			</Box>
		</Box>
	);
}

function Panel({ data }: any) {
	const margin = 3;
	let healthRegionMetrics = data.metrics.health_region;
	const { t } = useTranslation();
	return (
		<Center m={5} rounded="md" shadow={3} py="3">
			<Container w="100%" centerContent={true}>
				{/* heading for health region m,etrics*/}
				<Box w="100%" alignItems="center">
					<Heading size="md" mt={margin} mb={margin}>
						{data.hr_name}
					</Heading>
					<Heading size="sm" mb={margin}>
						{t("healthRegion")}
					</Heading>
					<Divider mb={margin} />
				</Box>
				<VStack>
					{Object.keys(healthRegionMetrics).map((key, i) => {
						return <MetricRow metrics={healthRegionMetrics[key]} key={i} />;
					})}
				</VStack>
				{/* heading for province metrics */}
				<Box w="100%" alignItems="center">
					<Heading size="md" mb={margin}>
						{data.prov}
					</Heading>
					<Heading size="sm" mb={margin}>
						{t("province")}
					</Heading>
				</Box>
			</Container>
		</Center>
	);
}

// return (
// 	<VStack space={4} alignItems="center">
// 		<Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
// 			<Text>{JSONdata.hr_name} Panel</Text>
// 		</Center>
// 	</VStack>
// );

export default Panel;
