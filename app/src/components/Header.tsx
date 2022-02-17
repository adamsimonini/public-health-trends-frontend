import { Box, Heading, Divider } from "native-base";

const Header = () => {
	return (
		<Box alignItems="center">
			<Box w="100%" mb="5">
				<Heading size="lg" mx="3" alignItems="center" flexDirection="row">
					Public Health Trends
				</Heading>
				<Divider my="2" />
				<Heading size="sm" mx="3" alignItems="center" flexDirection="row">
					Your local public health app
				</Heading>
			</Box>
		</Box>
	);
};

export default Header;
