import * as React from "react";
import { Container, Input, FormControl, Switch, useColorMode, WarningOutlineIcon, useColorModeValue, View, Flex, Spacer, Image, Button, Box, HamburgerIcon, Pressable, Heading, VStack, Text, Center, HStack, Divider, Icon, extendTheme } from "native-base";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import LocationButton from "@components/LocationSelection/LocationButton";
import { FontAwesome } from "@expo/vector-icons";

function LocationPannel() {
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	const { colorMode, toggleColorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		// <Container w="100%" h="100%">
		<VStack space={4} alignItems="center">
			<Center w="64" rounded="md" shadow={3}>
				{/* add isInvalid to FormControl to prompt error message */}
				<FormControl w="75%" maxW="300px">
					<FormControl.Label mt="5">Enter the first 3 characters of a postal code:</FormControl.Label>
					<Input mt="5" placeholder="A0A" variant="outline" isRequired />
					<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Try different from previous passwords.</FormControl.ErrorMessage>
				</FormControl>
				<Button mt="5" mb="5" w="75%" leftIcon={<Icon name="plus" as={FontAwesome} size="sm" />}>
					{t("add")}
				</Button>
			</Center>
			<Center w="64" pt="5" pb="5" rounded="md" shadow={3}>
				<LocationButton fsa="A0A" />
				<LocationButton fsa="B1B" />
				<LocationButton fsa="C2C" />
			</Center>
		</VStack>
		// </Container>
	);
}

export default LocationPannel;
