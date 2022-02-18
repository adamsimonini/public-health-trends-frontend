import * as React from "react";
import { Platform, UIManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeBaseProvider, View, Flex, Spacer, Image, Button, Box, HamburgerIcon, Pressable, Heading, VStack, Text, Center, HStack, Divider, Icon } from "native-base";
import SplayData from "@components/SplayData";
const Drawer = createDrawerNavigator();

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
		case "Home":
			return "home";
		case "Select Disease":
			return "virus-outline";
		case "Choose Locations":
			return "map-marker";
		case "Charts":
			return "chart-bar";
		case "Info":
			return "information";
		case "Settings":
			return "cog-outline";
		default:
			return "home";
	}
};

function CustomDrawerContent(props: any) {
	return (
		<DrawerContentScrollView {...props} safeArea>
			<VStack space="6" my="2" mx="1">
				<Box px="4">
					<Text bold color="gray.700">
						Navigation
					</Text>
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
								bg={index === props.state.index ? "rgba(6, 182, 212, 0.1)" : "transparent"}
								onPress={e => {
									props.navigation.navigate(name);
								}}
							>
								<HStack space="7" alignItems="center">
									<Icon color={index === props.state.index ? "primary.500" : "gray.500"} size="5" as={<MaterialCommunityIcons name={getIcon(name)} />} />
									<Text fontWeight="500" color={index === props.state.index ? "primary.500" : "gray.700"}>
										{name}
									</Text>
								</HStack>
							</Pressable>
						))}
					</VStack>
					{/* <VStack space="5">
						<Text fontWeight="500" fontSize="14" px="5" color="gray.500">
							Labels
						</Text>
						<VStack space="3">
							<Pressable px="5" py="3">
								<HStack space="7" alignItems="center">
									<Icon color="gray.500" size="5" as={<MaterialCommunityIcons name="bookmark" />} />
									<Text color="gray.700" fontWeight="500">
										Family
									</Text>
								</HStack>
							</Pressable>
							<Pressable px="5" py="2">
								<HStack space="7" alignItems="center">
									<Icon color="gray.500" size="5" as={<MaterialCommunityIcons name="bookmark" />} />
									<Text color="gray.700" fontWeight="500">
										Friends
									</Text>
								</HStack>
							</Pressable>
							<Pressable px="5" py="3">
								<HStack space="7" alignItems="center">
									<Icon color="gray.500" size="5" as={<MaterialCommunityIcons name="bookmark" />} />
									<Text fontWeight="500" color="gray.700">
										Work
									</Text>
								</HStack>
							</Pressable>
						</VStack>
					</VStack> */}
				</VStack>
			</VStack>
		</DrawerContentScrollView>
	);
}

// Replace title with custom component: https://reactnavigation.org/docs/headers/#replacing-the-title-with-a-custom-component
function LogoTitle() {
	return (
		<Box w="100%" flex="1">
			<VStack space={2.5} w="100%" px="3" alignItems="center">
				<Flex
					direction="row"
					mb="2.5"
					mt="1.5"
					_text={{
						color: "coolGray.800"
					}}
					alignItems="center"
				>
					<Image alt="public health trends logo" style={{ width: 50, height: 50 }} source={require("@assets/chart-600x600.png")} mr="3" />
					<Heading size="lg">Public Health Trends</Heading>
				</Flex>
			</VStack>
		</Box>
	);
}

function MyDrawer() {
	return (
		<Box safeArea flex={1}>
			<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
				<Drawer.Screen name="Home" options={{ headerTitle: props => <LogoTitle {...props} /> }} component={Component} />
				<Drawer.Screen name="Select Disease" options={{ headerTitle: props => <LogoTitle {...props} /> }} component={Component} />
				<Drawer.Screen name="Choose Locations" options={{ headerTitle: props => <LogoTitle {...props} /> }} component={Component} />
				<Drawer.Screen name="Info" options={{ headerTitle: props => <LogoTitle {...props} /> }} component={Component} />
				<Drawer.Screen name="Settings" options={{ headerTitle: props => <LogoTitle {...props} /> }} component={Component} />
			</Drawer.Navigator>
		</Box>
	);
}

export default function NavBar() {
	return (
		<NavigationContainer>
			<NativeBaseProvider>
				<MyDrawer />
			</NativeBaseProvider>
		</NavigationContainer>
	);
}
