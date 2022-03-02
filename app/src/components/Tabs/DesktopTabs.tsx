import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useColorMode, useBreakpointValue } from "native-base";
import * as React from "react";
import Settings from "@screens/Settings";
import Info from "@screens/Info";
import Locations from "@screens/Locations";
import Home from "@screens/Home";
import Diseases from "@screens/Diseases";
import LocationPanel from "@components/LocationSelection/LocationPanel";

const Tab = createMaterialTopTabNavigator();

export default function DesktopHomeTabs() {
	const showFilterTab = useBreakpointValue({
		base: true,
		xl: false
	});
	const { colorMode, toggleColorMode } = useColorMode();
	const screenOptions = {
		tabBarStyle: {
			color: "red"
		},
		tabBarItemStyle: {
			backgroundColor: colorMode === "dark" ? "white" : "red",
			borderColor: "#EE4444",
			borderStyle: "solid",
			borderWidth: 1,
			color: "black",
			margin: 5,
			borderRadius: 5
		}
	};
	return (
		<Tab.Navigator {...{ screenOptions }}>
			{showFilterTab && <Tab.Screen name="filters" component={LocationPanel} />}
			<Tab.Screen name="map" component={Info} />
			<Tab.Screen name="results" component={Settings} />
		</Tab.Navigator>
	);
}
