import React from "react";
import { useTranslation } from "react-i18next";
import { VStack, Center, Text, Button } from "native-base";
import LocationFilter from "@components/Filters/Location/LocationFilter";
import DiseaseFilter from "@components/Filters/DiseaseFilter";
import { useSelector, useDispatch } from "react-redux";
import Actions from "@store/actions";

function FilterPanel() {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();
	const { t } = useTranslation();

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
			<Button
				onPress={() => {
					dispatch(Actions.increment());
				}}
			>
				{t("seeResults")}
			</Button>
			<Text>{counter}</Text>
		</VStack>
	);
}

export default FilterPanel;
