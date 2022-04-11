import * as React from "react";
import { Flex, Image, Box, Heading, VStack, Spacer, Center } from "native-base";
import { useTranslation } from "react-i18next";

// Replace navigation title with custom component: https://reactnavigation.org/docs/headers/#replacing-the-title-with-a-custom-component

function NavTitle() {
	const { t } = useTranslation();
	return (
		<Box w="100%" flex="1">
			<VStack space={2.5} w="100%" px="3">
				<Flex
					w="100%"
					direction="row"
					mb="2.5"
					mt="1.5"
					_text={{
						color: "coolGray.800"
					}}
					alignItems="center"
				>
					<Image alt="public health trends logo" style={{ width: 50, height: 50 }} source={require("@assets/chart-600x600.png")} mr="3" />
					<Heading size="lg">{t("COVIDTrends")}</Heading>
				</Flex>
			</VStack>
		</Box>
	);
}

export default NavTitle;
