import React, { useState, useEffect } from "react";
import { useColorMode, Icon, Box, Button, Center, Select, CheckIcon, HStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Actions from "@store/actions/";

const LanguageToggle = () => {
	const [language, setLanguage] = useState("en");
	const { i18n } = useTranslation();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const storedLanguage = useSelector(state => state.language);

	const storeLanguage = async language => {
		await dispatch(Actions.setLanguage(language));
	};

	useEffect(() => {
		if (storedLanguage) {
			setLanguage(storedLanguage);
		}
	}, []);

	const changeLanguage = async selection => {
		await setLanguage(selection);
		await storeLanguage(selection);
		i18n.changeLanguage(selection);
		console.log(`state for component: ${selection}`);
	};

	return (
		<HStack justifyContent="center" alignItems="center">
			<Icon name="language" as={FontAwesome}></Icon>
			<Select
				selectedValue={language}
				maxW="100%"
				accessibilityLabel={t("chooseLanguage")}
				placeholder={t("chooseLanguage")}
				_selectedItem={{
					bg: "teal.600",
					endIcon: <CheckIcon size="5" />
				}}
				mt={1}
				onValueChange={itemValue => changeLanguage(itemValue)}
			>
				<Select.Item label="English" value="en" />
				<Select.Item label="Français" value="fr" />
				<Select.Item label="Español" value="es" />
				<Select.Item label="中国人" value="man" />
			</Select>
		</HStack>
	);
};

export default LanguageToggle;
