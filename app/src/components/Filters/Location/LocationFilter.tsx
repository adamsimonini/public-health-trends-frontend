import React, { useEffect, useState } from "react";
import { Input, FormControl, WarningOutlineIcon, Button, Box, Center, Icon } from "native-base";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import LocationButton from "@components/Filters/Location/LocationButton";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Locations from "screens/Locations";
import { useSelector, useDispatch } from "react-redux";
import Actions from "@store/actions/";

// https://react-native-async-storage.github.io/async-storage/docs/usage

function LocationFilter() {
	const counter = useSelector(state => state.counter);
	const storeLocations = useSelector(state => state.location);
	const dispatch = useDispatch();
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	// const { colorMode, toggleColorMode } = useColorMode();
	const [locations, setLocationsData] = useState([]);
	// controlled components: https://reactjs.org/docs/forms.html#controlled-components
	const [locationValue, setLocationValue] = useState("");
	const [disableAddButton, setDisableAddButton] = useState(true);
	const { t } = useTranslation();
	// let locationInput = React.createRef();

	// const addLocation = async () => {
	// 	if (locationValue) {
	// 		if (!storeLocations.includes(locationValue.toUpperCase())) {
	// 			setDisableAddButton(true);
	// 			setLocationValue("");
	// 			let newLocations = [...locations, locationValue.toUpperCase()];
	// 			await storeData("locations", newLocations);
	// 			await getData("locations");
	// 			await setLocationsData(newLocations);
	// 			await dispatch(Actions.addLocation([...newLocations]));
	// 		} else {
	// 			console.log(`Error - ${locationValue} is already within the locations array`);
	// 		}
	// 	} else {
	// 		console.log("Error - no location provided");
	// 	}
	// };

	const removeLocation = async (location: string) => {
		// let newLocations: string[] = locations.filter(e => e !== location);
		// await setLocationsData(newLocations);
		// await storeData("locations", newLocations);
		await dispatch(Actions.removeLocation(location));
	};

	const storeData = async (key: any, value: any) => {
		try {
			// ensure the data is stored as a JSON, so it can be reversed: https://www.w3schools.com/js/js_json_stringify.asp
			await AsyncStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
			console.log(e);
		}
	};

	const getData = async (value: any) => {
		try {
			const data = await AsyncStorage.getItem(value);
			if (data !== null && data != undefined) {
				return data;
			} else {
				console.log(`Error - Async Storage failed to find a value for this key: ${value}`);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const loadLocations = async () => {
		const storedLocations = await getData("locations");
		if (storedLocations) {
			await setLocationsData(JSON.parse(storedLocations));
		}
	};

	useEffect(() => {
		loadLocations();
	}, []);

	const handleInputChange = e => {
		setLocationValue(e);
		e.length === 3 ? setDisableAddButton(false) : setDisableAddButton(true);
	};

	// validation https://docs.nativebase.io/form

	return (
		<Box w="100%">
			<Center w="100%">
				<FormControl w="75%">
					<FormControl.Label mt="5">Enter the first 3 characters of a postal code:</FormControl.Label>
					<Input maxLength={3} value={locationValue} onChangeText={handleInputChange} mt="5" placeholder="A0A" variant="outline" isRequired />
					<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Input invalid. Please input the first 3 characters of a postal code.</FormControl.ErrorMessage>
				</FormControl>
				<Button
					isDisabled={disableAddButton}
					mt="5"
					mb="5"
					w="75%"
					onPress={() => {
						let upperCaseLocation = locationValue.toUpperCase();
						if (!storeLocations.includes(upperCaseLocation)) {
							dispatch(Actions.addLocation(upperCaseLocation));
						} else {
							console.log(`Error - ${upperCaseLocation} is already within the locations array`);
						}
					}}
					leftIcon={<Icon name="plus" as={FontAwesome} size="sm" />}
				>
					{t("add")}
				</Button>

				{storeLocations[0] && (
					<Center>
						{/* <Center w="64" pt="5" pb="5" rounded="md" shadow={3}> */}
						{storeLocations.map((location, index) => {
							return <LocationButton fsa={location} key={`${location}-${index}`} removeLocation={removeLocation} />;
						})}
						{/* </Center> */}
					</Center>
				)}
			</Center>
		</Box>
	);
}

export default LocationFilter;
