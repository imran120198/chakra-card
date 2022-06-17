import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ info }) => {
  return (
    <Box
      w="35%"
      h="300px"
      m="auto"
      my="5%"
      color="white"
      bgGradient="linear(to-r,#f6425b,#f6425b)"
      borderRadius="15px"
    >
      <Flex direction="column" gap="20px">
        <Heading textAlign="right" p="10px" mr="20px">
          VISA
        </Heading>
        <Text ml="10%" align="left" fontSize="lg">
          {info.cardNumber}
        </Text>

        <Flex direction="row" justifyContent="space-around" mt="3%">
          <Flex direction="column">
            <Text fontSize="xs" textAlign="left">
              CARD HOLDER
            </Text>
            <Text fontSize="xs">{info.cardHolder}</Text>
          </Flex>
          <Flex direction="column">
            <Text fontSize="xs" textAlign="left">
              EXPIRY
            </Text>
            <Text fontSize="xs">{`${info.expMonth}/${info.expYear}`}</Text>
          </Flex>
          <Flex direction="column">
            <Text fontSize="xs" textAlign="left">
              CVC
            </Text>
            <Text fontSize="xs">{info.cvc}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
