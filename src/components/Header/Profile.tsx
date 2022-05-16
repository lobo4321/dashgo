import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Joao Lobo</Text>
        <Text color="gray.300" fontSize="small">
          jglobo47@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Joao Lobo"
        src="https://github.com/lobo4321.png"
      />
    </Flex>
  );
}
