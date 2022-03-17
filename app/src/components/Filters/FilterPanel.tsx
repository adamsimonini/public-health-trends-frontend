import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { VStack, Center, Text, Button } from "native-base";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import LocationFilter from "@components/Filters/Location/LocationFilter";
import DiseaseFilter from "@components/Filters/DiseaseFilter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "@store/actions/counter";

function mapStateToProps(state: any) {
	return {
		counter: state.counter
	};
}

function FilterPanel() {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<VStack space={4} alignItems="center" my="5">
			<Center w="75%" rounded="md" shadow={3} py="3">
				<LocationFilter />
			</Center>
			{/* <Center w="75%" rounded="md" shadow={3} py="3">
				<DiseaseFilter />
			</Center> */}
			<Center w="75%" rounded="md" shadow={3} py="3">
				<DiseaseFilter />
			</Center>
			<Button onPress={() => dispatch(increment())}>See results</Button>
			<Text>{counter}</Text>
		</VStack>
	);
}

export default FilterPanel;
