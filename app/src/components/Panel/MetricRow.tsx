import React from "react";
import { useColorMode, useBreakpointValue, useColorModeValue, Text } from "native-base";
import { VStack, Box, Container, Image, AspectRatio, Stack, Heading, HStack, Center, Divider, Flex } from "native-base";
import { useTranslation } from "react-i18next";

function MetricRow({ metrics }: any) {
	const margin = 3;
	const { t } = useTranslation();
	console.log(metrics);
	return (
		<Center m={5}>
			{Object.keys(metrics).map((key, i) => {
				return <Text key={i}>{`${key}: ${metrics[key]}`}</Text>;
			})}
		</Center>
	);
}

export default MetricRow;
