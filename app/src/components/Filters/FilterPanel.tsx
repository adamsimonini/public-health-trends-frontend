import * as React from "react";
import { useColorMode, VStack, HStack, Center, useBreakpointValue, useColorModeValue, Text, Headin, Button } from "native-base";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import LocationFilter from "@components/Filters/Location/LocationFilter";
import DiseaseFilter from "@components/Filters/DiseaseFilter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function FilterPanel({ navigation }) {
	return (
		<VStack space={4} alignItems="center" mb="5" w="100%">
			<Center w="75%" rounded="md" shadow={3} py="3">
				<LocationFilter />
			</Center>
			{/* <Center w="75%" rounded="md" shadow={3} py="3">
				<DiseaseFilter />
			</Center> */}
			<Center w="75%" rounded="md" shadow={3} py="3">
				<DiseaseFilter />
			</Center>
			<Button onPress={() => {}}>See results</Button>
		</VStack>
	);
}

export default FilterPanel;
