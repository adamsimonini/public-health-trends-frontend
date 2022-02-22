import * as React from "react";
import "react-native-reanimated";
import { Platform, UIManager } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeBaseProvider, Switch, useColorMode, useColorModeValue, View, Flex, Spacer, Image, Button, Box, HamburgerIcon, Pressable, Heading, VStack, Text, Center, HStack, Divider, Icon, extendTheme } from "native-base";
import * as Linking from "expo-linking";
import NavTitle from "@components/Navigation/NavTitle";
import SplayData from "@components/SplayData";

const Drawer = createDrawerNavigator();
const prefix = Linking.createURL("/");

const linking = {
	prefixes: [prefix]
};

if (Platform.OS === "android") {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

function Component(props: any) {
	return (
		<Center>
			<Text mt="12" fontSize="18">
				This is the{" "}
				<Text bold fontSize="18">
					{props.route.name}
				</Text>{" "}
				page!
			</Text>
		</Center>
	);
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
		<DrawerContentScrollView {...props} safeArea flex={19}>
			<VStack space="6" my="2" mx="1">
				<Box px="4">
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
				<Drawer.Screen name="home" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Component} />
				<Drawer.Screen name="select-disease" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Component} />
				<Drawer.Screen name="choose-locations" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Component} />
				<Drawer.Screen name="info" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Component} />
				<Drawer.Screen name="settings" options={{ headerTitle: props => <NavTitle {...props} /> }} component={Component} />
			</Drawer.Navigator>
		</Box>
	);
}

export default NavDrawer;
