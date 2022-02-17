import { Stack, Input, Container, Divider, Box, Heading, Flex, Spacer, Center, Button, Text, Icon } from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SelectLocation = () => {
	return (
		<Container w="100%">
			<Box w="100%" maxH="70" mb="5">
				<Flex
					w="100%"
					direction="row"
					mb="2.5"
					mt="1.5"
					_text={{
						color: "coolGray.800"
					}}
				>
					{/* <Box w="20%" display="flex" flexDirection="row"> */}
					<Center>
						<Text>Postal code:</Text>
					</Center>
					{/* </Box> */}
					<Divider orientation="vertical" mx="2" />
					{/* <Box w="60%"> */}
					<Input h="100%" variant="rounded" placeholder="postal code" />
					{/* </Box> */}
					<Divider orientation="vertical" mx="2" />
					{/* <Box w="20%"> */}
					<Button>
						<AntDesign name="search1" size={36} color="white" />
					</Button>
					{/* </Box> */}
				</Flex>
				{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-location" /> */}
				{/* <Heading size="sm" mx="3" alignItems="center" flexDirection="row">
					Your local public health app
				</Heading>
				<Divider orientation="vertical" my="2" />
				<Input variant="rounded" placeholder="postal code" /> */}
			</Box>
		</Container>
	);
};

export default SelectLocation;
