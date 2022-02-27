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
import LocationPanel from "@components/LocationSelection/LocationPanel";

function Home() {
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	const { colorMode, toggleColorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		<>
			<Center>
				<ScreenHeading translationKey="home" />
			</Center>
			<Center>
				<HStack h="100%">
					<VStack space={4} alignItems="center">
						<LocationPanel />
					</VStack>
					<Center h="100%" bg="primary.300" rounded="md" shadow={3} />
				</HStack>
			</Center>
		</>
	);
}

export default Home;
