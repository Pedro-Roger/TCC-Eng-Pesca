import { Box, Flex, Text } from "@chakra-ui/react";

const Card = () => {
    return ( 
        <Flex position="relative" w="250px" h="300px" justifyContent="center">
        <Box
          position="absolute"
          top="-4px"
          left="-2px"
          right="-2px"
          bottom="5px"
          borderRadius="20px"
          border="1px solid"
          borderColor="transparent"
          background="linear-gradient(to bottom, aliceblue, rgba(255, 255, 255, 0))"
          zIndex={0}
        />

        <Flex
          bg="#11444A"
          w="100%"
          h="100%"
          justifyContent="center"
          borderRadius="20px"
          zIndex={1}
          position="relative"
          flexDirection="column"
          alignItems="center"
        >
          <Box mb={"10px"} bg="red" w="90px" h="90px" />

          <Text mt={"10px"} fontWeight={"bold"}>
            Pedro Roger{" "}
          </Text>

          <Flex
            mt={"10px"}
            w="200px"
            h="120px"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            borderRadius="15px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            justifyContent={"center"}
            align={"center"}
            flexDirection={"column"}
          >
            <Text>Cargo: Desenvolvedor</Text>
            <Text>idade: 25</Text>
            <Text></Text>
          </Flex>
        </Flex>
      </Flex>
     );
}
 
export default Card;