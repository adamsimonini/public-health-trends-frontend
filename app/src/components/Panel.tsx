import React from "react";
import { useColorMode, useBreakpointValue, useColorModeValue, Text } from "native-base";
import { VStack, Center } from "native-base";

function Panel({ hr }) {
	console.log(hr);
	return (
		<VStack space={4} alignItems="center">
			<Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
				<Text>{hr.hr_name} Panel</Text>
			</Center>
		</VStack>
	);
}

export default Panel;
