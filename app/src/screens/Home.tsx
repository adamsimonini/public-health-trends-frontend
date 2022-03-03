import * as React from "react";
import { Platform, UIManager } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Switch, useColorMode, useBreakpointValue, useColorModeValue, View, Flex, Spacer, Image, Button, Box, HamburgerIcon, Pressable, Heading, VStack, Text, Center, HStack, Divider, Icon, extendTheme, ScrollView } from "native-base";
import NavTitle from "@components/Navigation/NavTitle";
import SplayData from "@components/SplayData";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@components/Navigation/LanguageToggle";
import { ThemeToggle } from "@theme/ThemeToggle";
import ScreenHeading from "@components/ScreenHeading";
import FilterPanel from "@components/Filters/FilterPanel";
import { Foundation, Feather } from "@expo/vector-icons";
import DesktopHome from "@components/DesktopHome";
import HomeTab from "@components/Tabs/HomeTab";

function Home() {
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	const { colorMode, toggleColorMode } = useColorMode();
	const { t } = useTranslation();
	const flexDir = useBreakpointValue({
		base: "column",
		xl: "row"
	});
	const showLeftFilter = useBreakpointValue({
		base: false,
		xl: true
	});
	const tabWidth = useBreakpointValue({
		base: "100%",
		xl: "80%"
	});
	const filterWidth = useBreakpointValue({
		base: "100%",
		xl: "20%"
	});

	return (
		<ScrollView showsVerticalScrollIndicator={true} px="5%">
			<Center>
				<ScreenHeading translationKey="home" />
			</Center>
			{/* https://docs.nativebase.io/building-tab-view */}
			<VStack direction={flexDir} maxWidth="100%">
				{showLeftFilter && (
					<Box w={filterWidth} mb="5">
						<Center>
							<Heading size="lg">{t("filters")}</Heading>
						</Center>
						<FilterPanel />
					</Box>
				)}
				<Box w={tabWidth}>
					<HomeTab />
				</Box>
				{/* <DesktopTab /> */}
				{/* <View
					style={{
						flexDirection: flexDir
					}}
				>
					{showDesktop && <Box></Box>}
					<Box>
						<Text>Three</Text>
						<LocationPanel />
					</Box>
				</View> */}
			</VStack>
		</ScrollView>
	);

	// return (
	// 	<Center>
	{
		/* <Container w="100%" h="100%">
				<Center w="100%">
					<ScreenHeading translationKey="home" />
				</Center>
				<Box w="100%">
					<HStack h="100%" space={10}>
						<Center w={[200, 48, 72]} h="100%" rounded="md" shadow={3}>
							<VStack space={4} alignItems="center">
								<LocationPanel />
							</VStack>
						</Center>
						<Divider orientation="vertical" />
						<Center w={[24, 48, 72]} h="100%" rounded="md" shadow={3}>
							<VStack space={4} alignItems="center">
								<LocationPanel />
							</VStack>
						</Center>
					</HStack>
				</Box>
			</Container> */
	}
	{
		/* </Center>
	); */
	}
}

export default Home;
