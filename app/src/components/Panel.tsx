import React from "react";
import { useColorMode, useBreakpointValue, useColorModeValue, Text } from "native-base";
import { 
	VStack, 
	Box, 
	Image, 
	AspectRatio, 
	Stack, 
	Heading, 
	HStack, 
	Center, 
	Divider,
	Flex
} from "native-base";

function DiseaseDataLine({ metric, metricName }) {
const translateTitle={
		cases_since_last_update: "Cases Since Last Update",
		average_monthly_cases: "Average Monthly Cases",
		deaths: "Deaths"
	}

	return (
		<Box alignItems="Left">
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
};

function DisplayPanelDiseaseData({ JSONdata }) {

console.log(typeof JSONdata)
console.log(JSONdata)

	return (
		<Box alignItems="Left">
			<Box w="500">
			{Object.keys(JSONdata.metrics).map(function(key, index) {
				return <DiseaseDataLine metric={JSONdata.metrics[key]} key={index} metricName={key}/>
				})
			}
			</Box>
		</Box>
	);
};

function Panel({ JSONdata }) {

	return (
		<Box alignItems="center">
		<Box maxW="500" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
		borderColor: "coolGray.600",
		backgroundColor: "gray.700"
		}} _web={{
		shadow: 2,
		borderWidth: 0
		}} _light={{
		backgroundColor: "gray.50"
		}}>
			<Box>
			<AspectRatio w="100%" ratio={16 / 9}>
				<Image source={{
				uri: JSONdata.prov_image
			}} alt="image" />
			</AspectRatio>
			</Box>
			<Stack p="4" space={3}>
			<Stack space={2}>
				<Heading size="md" ml="-1">
				{ JSONdata.hr_name }
				</Heading>
				<Text fontSize="xs" _light={{
				color: "violet.500"
			}} _dark={{
				color: "violet.400"
			}} fontWeight="500" ml="-0.5" mt="-1">
				{ JSONdata.prov }
				</Text>
			</Stack>
			<Text fontWeight="400">
				{ DisplayPanelDiseaseData({JSONdata}) }
			</Text>
			<HStack alignItems="center" space={4} justifyContent="space-between">
				<HStack alignItems="center">
				<Text color="coolGray.600" _dark={{
				color: "warmGray.200"
				}} fontWeight="400">
					Last Updated: { JSONdata.metrics['last_updated_date'] }
				</Text>
				</HStack>
			</HStack>
			</Stack>
		</Box>
		</Box>
	);
};

// return (
// 	<VStack space={4} alignItems="center">
// 		<Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
// 			<Text>{JSONdata.hr_name} Panel</Text>
// 		</Center>
// 	</VStack>
// );

export default Panel;
