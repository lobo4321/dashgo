import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1400}
      h="20"
      marginX="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashgo
        <Text as="span" color="pink.500">
          .
        </Text>
      </Text>
    </Flex>
  );
}
