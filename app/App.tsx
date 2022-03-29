import React from "react";
import { Box, Stack, Container, Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Code, Button } from "native-base";
import * as Localization from "expo-localization";
import { BaseTheme } from "@theme";
import Root from "@components/Root";
import API from "@utils/API";
import { PersistGate } from "redux-persist/integration/react";
import config from "@/nativebase.config";
import intializeStore from "./src/store";
import { Provider } from "react-redux";

let { store, persistor } = intializeStore();
// const store = createStore(allReducers);
// const store = intializeStore();

// expo's localization solution: https://docs.expo.dev/versions/latest/sdk/localization/

export default function App() {
	// const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NativeBaseProvider theme={BaseTheme} config={config}>
					<Root localization={Localization} />
				</NativeBaseProvider>
			</PersistGate>
		</Provider>
	);
}
