import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Fab, useColorMode, Icon, Box, Text, Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import i18n from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	let [language, setLanguage] = useState(i18n.locale);

	const toggleLanguage = () => {
		i18n.locale == "fr" ? (i18n.locale = "en") : (i18n.locale = "fr");
		setLanguage(i18n.locale);
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
