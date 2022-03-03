import * as React from "react";
import { Platform, UIManager } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Input, FormControl, Switch, useColorMode, WarningOutlineIcon, useColorModeValue, View, Flex, Spacer, Image, Button, Box, HamburgerIcon, Pressable, Heading, VStack, Text, Center, HStack, Divider, Icon, extendTheme } from "native-base";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import ScreenHeading from "@components/ScreenHeading";
import LocationPanel from "@components/Filters/Location/LocationFilter";

function Locations() {
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	const { colorMode, toggleColorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		<>
			<Center>
				<ScreenHeading translationKey="locations" />
			</Center>
			<LocationPanel />
			<LocationPanel />
		</>
	);
}

export default Locations;
