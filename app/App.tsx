import React from "react";
import { Box, Stack, Container, Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code } from "native-base";
import * as Localization from "expo-localization";
import { en, fr } from "@utils/translations";
import { BaseTheme } from "@theme/index";
// import VictoryChart from "./components/VictoryChart";
import Root from "@components/Root";
import API from "@utils/API";
import config from "@/nativebase.config";
import "@translation/i18n.config";
import { useTranslation } from "react-i18next";

// expo's localization solution: https://docs.expo.dev/versions/latest/sdk/localization/

export default function App() {
	const { t } = useTranslation();
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<NativeBaseProvider theme={BaseTheme} config={config}>
			<Text>{t("aboutICUData")}</Text>
			<Root localization={Localization} />
		</NativeBaseProvider>
	);
}
