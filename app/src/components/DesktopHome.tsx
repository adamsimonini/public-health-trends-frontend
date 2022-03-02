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

const Drawer = createDrawerNavigator();

if (Platform.OS === "android") {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

const getIcon = (screenName: any) => {
	switch (screenName) {
		case "home":
			return "home";
		case "select-disease":
			return "virus-outline";
		case "choose-locations":
			return "map-marker";
		case "charts":
			return "chart-bar";
		case "info":
			return "information";
		case "settings":
			return "cog-outline";
		default:
			return "home";
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
	const { colorMode, toggleColorMode } = useColorMode();
	// using colour mode to customize UI element theming: https://docs.nativebase.io/use-color-mode-value
	let hamburgerColour = colorMode === "dark" ? "white" : "black";
	return (
		<Box safeArea flex={1} w="100%">
			<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} screenOptions={{ headerTintColor: hamburgerColour }}>
				<Drawer.Screen name="home" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Home} />
				<Drawer.Screen name="select-disease" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Diseases} />
				<Drawer.Screen name="choose-locations" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Locations} />
				<Drawer.Screen name="info" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Info} />
				<Drawer.Screen name="settings" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Settings} />
			</Drawer.Navigator>
		</Box>
	);
}

export default NavDrawer;
