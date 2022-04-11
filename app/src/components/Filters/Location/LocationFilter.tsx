import React, { useEffect, useState } from "react";
import { Input, Text, FormControl, WarningOutlineIcon, Button, Box, Center, Icon } from "native-base";
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
	const storeLocations = useSelector(state => state.location);
	const dispatch = useDispatch();
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [locationValue, setLocationValue] = useState("");
	const [disableAddButton, setDisableAddButton] = useState(true);
	const { t } = useTranslation();
	const fsaPattern = /[A-Z][0-9][A-Z]/;
	const removeLocation = async (location: string) => {
		await dispatch(Actions.removeLocation(location));
	};

	useEffect(() => {
		if (locationValue.length < 3) {
			// remove the error message when the field isn't 3 characters long, but keep the button disabled
			setShowError(false);
			setErrorMessage("");
			setDisableAddButton(true);
		} else if (!fsaPattern.test(locationValue)) {
			// if the location already exists, disable the button and throw an error explaining so.
			setShowError(true);
			setErrorMessage(`${locationValue} is not a valid start of a postal code. Please follow the letter, number, letter format (e.g., A1A)`);
			setDisableAddButton(true);
		} else if (storeLocations.includes(locationValue.toUpperCase())) {
			// if the location already exists, disable the button and throw an error explaining so.
			setShowError(true);
			setErrorMessage(`${locationValue} is already included in the list below`);
			setDisableAddButton(true);
		} else {
			// if no validation errors were triggered, allow the user to click the button
			locationValue.length === 3 ? setDisableAddButton(false) : setDisableAddButton(true);
		}
	}),
		[locationValue];

	// validation https://docs.nativebase.io/form
	return (
		<Box w="100%">
			<Center w="100%">
				<FormControl w="75%" isInvalid={showError}>
					<FormControl.Label mt="5">{t("enterPostalCode")}</FormControl.Label>
					<Input maxLength={3} value={locationValue.toUpperCase()} onChangeText={textInput => setLocationValue(textInput.toUpperCase())} mt="5" placeholder="A0A" variant="outline" isRequired />
					{/* <FormControl.HelperText>I am a Helper text 😊</FormControl.HelperText> */}
					<FormControl.ErrorMessage style={{ maxWidth: "100%" }} leftIcon={<WarningOutlineIcon size="xs" />}>
						{/* <Text style={{ maxWidth: "100%" }}></Text> */}
						{errorMessage}
					</FormControl.ErrorMessage>
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
							setLocationValue("");
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
