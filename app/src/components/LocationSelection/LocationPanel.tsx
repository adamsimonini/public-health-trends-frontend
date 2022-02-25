import React, { useEffect, useState } from "react";
import { Container, Input, FormControl, Switch, useColorMode, WarningOutlineIcon, useColorModeValue, View, Flex, Spacer, Image, Button, Box, HamburgerIcon, Pressable, Heading, VStack, Text, Center, HStack, Divider, Icon, extendTheme } from "native-base";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import LocationButton from "@components/LocationSelection/LocationButton";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Locations from "screens/Locations";

// https://react-native-async-storage.github.io/async-storage/docs/usage

function LocationPannel() {
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	// const { colorMode, toggleColorMode } = useColorMode();
	const [locations, setLocationsData] = useState(["A0A", "B1B", "C2C"]);
	const [disableAddButton, setDisableAddButton] = useState(true);
	const { t } = useTranslation();
	let locationInput = React.createRef();

	const addLocation = (location: string) => {
		if (location) {
			if (!locations.includes(location.toUpperCase())) {
				let newLocations = [...locations, location.toUpperCase()];
				setLocationsData(newLocations);
			} else {
				console.error(`Error - ${location} is already within the locations array`);
			}
		} else {
			console.error("Error - no location provided");
		}
	};

	const removeLocation = (location: string) => {
		let newLocations: string[] = locations.filter(e => e !== location);
		setLocationsData(newLocations);
	};

	const storeData = async (key: any, value: any) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (e) {
			// saving error
		}
	};

	const getData = async (value: any) => {
		try {
			const data = await AsyncStorage.getItem(value);
			if (data !== null && data != undefined) {
				console.log(data);
			} else {
				console.error(`Error - Async Storage failed to find a value for this key: ${value}`);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const loadLocations = async () => {
		const storedLocations = await getData("locations");
		await storeData("locations", storedLocations);
	};

	const buttonDisabler = () => {
		console.log(locationInput.current.value);
		if (locationInput.current.value) {
			setDisableAddButton(false);
		} else {
			setDisableAddButton(true);
		}
	};

	useEffect(() => {
		loadLocations();
	}, []);

	const handleInputChange = () => {
		if (locationInput.current.value) {
			setDisableAddButton(false);
		} else {
			setDisableAddButton(true);
		}
	};

	// validation https://docs.nativebase.io/form

	return (
		// <Container w="100%" h="100%">
		<VStack space={4} alignItems="center">
			<Center w="64" rounded="md" shadow={3}>
				{/* add isInvalid to FormControl to prompt error message */}
				<FormControl w="75%" maxW="300px">
					<FormControl.Label mt="5">Enter the first 3 characters of a postal code:</FormControl.Label>
					<Input ref={locationInput} onChangeText={handleInputChange} mt="5" placeholder="A0A" variant="outline" isRequired />
					<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Try different from previous passwords.</FormControl.ErrorMessage>
				</FormControl>
				<Button
					isDisabled={disableAddButton}
					mt="5"
					mb="5"
					w="75%"
					onPress={() => {
						addLocation(locationInput.current.value);
					}}
					leftIcon={<Icon name="plus" as={FontAwesome} size="sm" />}
				>
					{t("add")}
				</Button>
			</Center>
			<Center w="64" pt="5" pb="5" rounded="md" shadow={3}>
				{locations.map((location, index) => {
					return <LocationButton fsa={location} key={`${location}-${index}`} updateLocations={removeLocation} />;
				})}
			</Center>
		</VStack>
		// </Container>
	);
}

export default LocationPannel;
