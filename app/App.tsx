import React from "react";
import { Box, Stack, Container, Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en, fr } from "@utils/translations";
import { BaseTheme } from "@theme/index";
// import VictoryChart from "./components/VictoryChart";
import Root from "@components/Root";
import API from "@utils/API";
import config from "@/nativebase.config";

// expo's localization solution: https://docs.expo.dev/versions/latest/sdk/localization/
i18n.translations = { en, fr };
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<NativeBaseProvider theme={BaseTheme} config={config}>
			<Text>{i18n.t("healthRegionWebsite")}</Text>
			<Root localization={Localization} />
		</NativeBaseProvider>
	);
}
