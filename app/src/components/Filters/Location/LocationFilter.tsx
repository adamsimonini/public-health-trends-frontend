import React, { useEffect, useState } from "react";
import { Input, FormControl, WarningOutlineIcon, Button, Box, Center, Icon } from "native-base";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import LocationButton from "@components/Filters/Location/LocationButton";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Actions from "@store/actions/";

// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
// const { colorMode, toggleColorMode } = useColorMode();
// controlled components: https://reactjs.org/docs/forms.html#controlled-components

function LocationFilter() {
	const counter = useSelector(state => state.counter);
	const storeLocations = useSelector(state => state.location);
	const dispatch = useDispatch();
	const [locations, setLocationsData] = useState([]);
	const [locationValue, setLocationValue] = useState("");
	const [disableAddButton, setDisableAddButton] = useState(true);
	const { t } = useTranslation();

	const removeLocation = async (location: string) => {
		await dispatch(Actions.removeLocation(location));
	};

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
						{storeLocations.map((location, index) => {
							return <LocationButton fsa={location} key={`${location}-${index}`} removeLocation={removeLocation} />;
						})}
					</Center>
				)}
			</Center>
		</Box>
	);
}

export default LocationFilter;
