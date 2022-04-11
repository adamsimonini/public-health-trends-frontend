import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Fab, useColorMode, Icon, Flex, Button, Box } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Actions from "@store/actions/";

const ThemeToggleFab = () => {
	const dispatch = useDispatch();
	const { colorMode, setColorMode, toggleColorMode } = useColorMode();
	const storedTheme = useSelector(state => state.theme);

	useEffect(() => {
		dispatch(Actions.setTheme(colorMode));
	}, [colorMode]);

	useEffect(() => {
		if (storedTheme) {
			setColorMode(storedTheme);
		}
	}, []);

	return (
		<>
			<Fab
				shadow={7}
				variant="unstyled"
				_dark={{
					bg: "orange.50",
					_hover: {
						bg: "orange.100"
					},
					_pressed: {
						bg: "orange.100"
					}
				}}
				_light={{
					bg: "blueGray.900",
					_hover: {
						bg: "blueGray.800"
					},
					_pressed: {
						bg: "blueGray.800"
					}
				}}
				p={3}
				icon={<Icon as={Ionicons} _dark={{ name: "sunny", color: "orange.400" }} _light={{ name: "moon", color: "blueGray.100" }} size="md" />}
				onPress={toggleColorMode}
			/>
		</>
	);
};

export const ThemeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		<Box w="120">
			<Button size="md" onPress={toggleColorMode} leftIcon={<Icon as={Ionicons} _dark={{ name: "sunny", color: "white" }} _light={{ name: "moon", color: "white" }} size="sm" />}>
				{colorMode === "dark" ? t("light") : t("dark")}
			</Button>
		</Box>
	);
};

export default ThemeToggleFab;
