import React, { useEffect, useState } from "react";
import { Container, Input, FormControl, Switch, useColorMode, WarningOutlineIcon, Select, CheckIcon } from "native-base";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import LocationButton from "@components/Filters/Location/LocationButton";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Locations from "screens/Locations";

// https://react-native-async-storage.github.io/async-storage/docs/usage

function DiseaseFilter() {
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	// const { colorMode, toggleColorMode } = useColorMode();
	const [diseases, setDiseases] = useState(["COVID-19", "HIV", "Fentanyl Use"]);
	// controlled components: https://reactjs.org/docs/forms.html#controlled-components
	const [locationValue, setLocationValue] = useState("");
	const [disableAddButton, setDisableAddButton] = useState(true);
	const { t } = useTranslation();
	// let locationInput = React.createRef();

	// const addLocation = async () => {
	// 	if (locationValue) {
	// 		if (!locations.includes(locationValue.toUpperCase())) {
	// 			let newLocations = [...locations, locationValue.toUpperCase()];
	// 			await storeData("locations", newLocations);
	// 			await getData("locations");
	// 			await setLocationsData(newLocations);
	// 			setDisableAddButton(true);
	// 			setLocationValue("");
	// 		} else {
	// 			console.log(`Error - ${locationValue} is already within the locations array`);
	// 		}
	// 	} else {
	// 		console.log("Error - no location provided");
	// 	}
	// };

	// const removeLocation = async (location: string) => {
	// 	let newLocations: string[] = locations.filter(e => e !== location);
	// 	await setLocationsData(newLocations);
	// 	await storeData("locations", newLocations);
	// };

	// const storeData = async (key: any, value: any) => {
	// 	try {
	// 		// ensure the data is stored as a JSON, so it can be reversed: https://www.w3schools.com/js/js_json_stringify.asp
	// 		await AsyncStorage.setItem(key, JSON.stringify(value));
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// const getData = async (value: any) => {
	// 	try {
	// 		const data = await AsyncStorage.getItem(value);
	// 		if (data !== null && data != undefined) {
	// 			return data;
	// 		} else {
	// 			console.log(`Error - Async Storage failed to find a value for this key: ${value}`);
	// 		}
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// const loadLocations = async () => {
	// 	const storedLocations = await getData("locations");
	// 	if (storedLocations) {
	// 		await setLocationsData(JSON.parse(storedLocations));
	// 	}
	// };

	// useEffect(() => {
	// 	loadLocations();
	// }, []);

	// const handleInputChange = e => {
	// 	setLocationValue(e);
	// 	e.length === 3 ? setDisableAddButton(false) : setDisableAddButton(true);
	// };

	// validation https://docs.nativebase.io/form

	return (
		<>
			<FormControl w="100%%" isRequired>
				<FormControl.Label>Select a public health issue</FormControl.Label>
				<Select
					minWidth="200"
					accessibilityLabel="Choose an issue"
					placeholder="Choose an issue"
					_selectedItem={{
						bg: "teal.600",
						endIcon: <CheckIcon size={5} />
					}}
					mt="1"
				>
					{diseases.map((disease, index) => {
						return <Select.Item label={disease} value={disease.toLowerCase()} key={`${disease}-${index}`} />;
					})}
					{/* <Select.Item label="UX Research" value="ux" />
					<Select.Item label="Web Development" value="web" />
					<Select.Item label="Cross Platform Development" value="cross" />
					<Select.Item label="UI Designing" value="ui" />
					<Select.Item label="Backend Development" value="backend" /> */}
				</Select>
				<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Please make a selection!</FormControl.ErrorMessage>
			</FormControl>
		</>
	);
}

export default DiseaseFilter;
