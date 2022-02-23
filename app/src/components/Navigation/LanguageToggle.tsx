import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Fab, useColorMode, Icon, Box, Text, Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// guide for setting up translations https://dev.to/ramonak/react-native-internationalization-with-i18next-568n

const LanguageToggle = props => {
	const { i18n } = useTranslation();
	const { colorMode, toggleColorMode } = useColorMode();
	let language = i18n.language;

	const toggleLanguage = () => {
		i18n.language == "fr" ? i18n.changeLanguage("en") : i18n.changeLanguage("fr");
		console.log(i18n.language);
	};

	return (
		<Box position="absolute" right="0" mr="5" top="0%" zIndex={1}>
			<FontAwesome.Button name="language" onPress={toggleLanguage}>
				{language == "fr" ? "English" : "Français"}
			</FontAwesome.Button>
		</Box>
	);
};

export default LanguageToggle;
