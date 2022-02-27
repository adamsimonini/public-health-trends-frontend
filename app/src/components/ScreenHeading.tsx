import React from "react";
import { Fab, useColorMode, Icon, Flex, Button, Heading, Text } from "native-base";
import { useTranslation } from "react-i18next";

const ScreenHeading = props => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		<Heading size="lg" my="5">
			{t(props.translationKey)}
		</Heading>
	);
};

export default ScreenHeading;
