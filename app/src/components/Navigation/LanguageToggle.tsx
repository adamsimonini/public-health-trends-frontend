import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Flex, useColorMode, Icon, Box, Text, Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// guide for setting up translations https://dev.to/ramonak/react-native-internationalization-with-i18next-568n

const LanguageToggle = () => {
	const { i18n } = useTranslation();
	const { colorMode, toggleColorMode } = useColorMode();
	let language = i18n.language;

	const toggleLanguage = () => {
		language == "fr" ? i18n.changeLanguage("en") : i18n.changeLanguage("fr");
	};

	return (
		<Box w="120">
			{/* color={colorMode === "dark" ? "white" : "black"} */}
			{/* colorScheme={colorMode} */}
			<Button size="md" onPress={toggleLanguage} leftIcon={<Icon name="language" as={FontAwesome} />}>
				{language == "fr" ? "English" : "Français"}
			</Button>
		</Box>
	);
};

export default LanguageToggle;
