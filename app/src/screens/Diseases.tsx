import * as React from "react";
import { Platform, UIManager } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Switch, useColorMode, useColorModeValue, View, Flex, Spacer, Image, Button, Box, HamburgerIcon, Pressable, Heading, VStack, Text, Center, HStack, Divider, Icon, extendTheme } from "native-base";
import NavTitle from "@components/Navigation/NavTitle";
import SplayData from "@components/SplayData";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@components/Navigation/LanguageToggle";
import { ThemeToggle } from "@theme/ThemeToggle";
import ScreenHeading from "@components/ScreenHeading";

function Diseases() {
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	const { colorMode, toggleColorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		// <Container w="100%" h="100%">
		<VStack space={4} alignItems="center">
			<ScreenHeading translationKey="diseases" />
			<Center w="64" h="20" bg="canRed.50" rounded="md" shadow={3}></Center>
		</VStack>
		// </Container>
	);
}

export default Diseases;
