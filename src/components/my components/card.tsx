import { Box, Flex, Text } from "@chakra-ui/react";
import pedro from "../../assets/foto perfil.jpg";

const Card = () => {
  return (
    <Flex ml={"20px"} position="relative" w="250px" h="300px" justifyContent="center">
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
        bg="linear-gradient(to bottom, #091219, #10243E)"
        w="100%"
        h="100%"
        justifyContent="center"
        borderRadius="20px"
        zIndex={1}
        position="relative"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          w="80px"
          h="80px"
          borderRadius="50%"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={pedro}
            alt="Foto de perfil"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>


        <Text mt={"10px"} fontWeight={"bold"}>
          Pedro Roger
        </Text>

        <Flex
          mt={"10px"}
          w="200px"
          h="120px"
          // bg="linear-gradient(to Top, #101423, #10243E)"
          backdropFilter="blur(10px)"
          borderRadius="15px"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          justifyContent={"center"}
          align={"center"}
          flexDirection={"column"}
        >
          <Text>Cargo: Desenvolvedor</Text>
          <Text>idade: 25</Text>

        </Flex>
      </Flex>
    </Flex>
  );
}

export default Card;