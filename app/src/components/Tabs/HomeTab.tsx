import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useColorMode, useBreakpointValue } from "native-base";
import * as React from "react";
import FilterPanel from "@components/Filters/FilterPanel";
import Results from "@components/Results";
import Map from "@components/Map";
import { useTranslation } from "react-i18next";

const Tab = createMaterialTopTabNavigator();

export default function DesktopHomeTabs() {
	const { t } = useTranslation();
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
			{showFilterTab && <Tab.Screen name="filters" component={FilterPanel} />}
			<Tab.Screen name={t("map")} component={Map} />
			<Tab.Screen name={t("results")} component={Results} />
		</Tab.Navigator>
	);
}
