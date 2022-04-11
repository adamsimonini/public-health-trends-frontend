import * as React from "react";
import { Platform, UIManager } from "react-native";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorMode, Flex, Box, Pressable, VStack, Text, Center, HStack, Divider, Icon } from "native-base";
import NavTitle from "@components/Navigation/NavTitle";
// import SplayData from "@components/SplayData";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";
import Settings from "@screens/Settings";
import Info from "@screens/Info";
import Locations from "@screens/Locations";
import Home from "@screens/Home";
import Diseases from "@screens/Diseases";
import DesktopTab from "components/Tabs/HomeTab";

const Drawer = createDrawerNavigator();

if (Platform.OS === "android") {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

const getIcon = (screenName: any) => {
	switch (screenName) {
		case "Home":
		case "Domicile":
			return "home";
		case "Select-disease":
		case "Sélectionnez la maladie":
			return "virus-outline";
		case "Choose-locations":
		case "Choisir des emplacements":
			return "map-marker";
		case "charts":
			return "chart-bar";
		case "Info":
		case "Info":
			return "information";
		case "Settings":
		case "Réglages":
			return "cog-outline";
		default:
			return "help";
	}
};
function CustomDrawerContent(props: any) {
	return (
		<DrawerContentScrollView {...props} safeArea w="100%">
			<VStack space="6" my="2" mx="1" w="100%">
				<Box px="4" w="100%">
					<Text bold>Navigation</Text>
					{/* <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
						john_doe@gmail.com
					</Text> */}
				</Box>
				<VStack divider={<Divider />} space="4">
					<VStack space="3">
						{props.state.routeNames.map((name: any, index: any) => (
							<Pressable
								key={name}
								px="5"
								py="3"
								rounded="md"
								onPress={e => {
									props.navigation.navigate(name);
								}}
							>
								<HStack space="7" alignItems="center">
									<Icon size="5" as={<MaterialCommunityIcons name={getIcon(name)} />} />
									<Text fontWeight="500">{name}</Text>
								</HStack>
							</Pressable>
						))}
					</VStack>
				</VStack>
			</VStack>
		</DrawerContentScrollView>
	);
}

function NavDrawer() {
	const { t } = useTranslation();
	const { colorMode, toggleColorMode } = useColorMode();
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	let hamburgerColour = colorMode === "dark" ? "white" : "black";
	return (
		<Box safeArea flex={1} w="100%">
			<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} screenOptions={{ headerTintColor: hamburgerColour }}>
				{/* <Drawer.Screen name={t("home")} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Home} />
				<Drawer.Screen name={t("selectDisease")} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Diseases} />
				<Drawer.Screen name={t("chooseLocations")} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Locations} />
				<Drawer.Screen name={t("info")} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Info} />
				<Drawer.Screen name={t("settings")} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Settings} /> */}
				<Drawer.Screen name={"Home"} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Home} />
				<Drawer.Screen name={"Select-disease"} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Diseases} />
				<Drawer.Screen name={"Choose-locations"} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Locations} />
				<Drawer.Screen name={"Info"} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Info} />
				<Drawer.Screen name={"Settings"} options={{ headerTitle: props => <NavTitle {...props} /> }} component={Settings} />
			</Drawer.Navigator>
		</Box>
	);
}

export default NavDrawer;
