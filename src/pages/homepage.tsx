import { Button, Flex, Text } from "@chakra-ui/react";
import { FaFish, FaShrimp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Flex w={"100%"} h={"100vh"} gap={"20px"} flexDirection={"column"}>
      <Text ml={"40px"} mt={"40px"} fontSize={"40px"} color={"aliceblue"}>
        Escolha o animal
      </Text>

      <Flex w={"100%"} mt={"150px"} gap={"20px"} justifyContent={"center"} alignItems={"center"}
        flexDirection={{base:"column", md:"row"}}
      >
        <Button bg="transparent" border={"1px solid aliceblue"} w={"200px"} onClick={() => navigate("/Planejamentocamarao")}>
            <FaShrimp />
          Camarão
        </Button>
        <Button bg="transparent" border={"1px solid aliceblue"} w={"200px"} onClick={() => navigate("/PlanejamentoTilapia")}>
          
          <FaFish />
          Tilápia
        </Button>
      </Flex>
      
    </Flex>
  );
};

export default Homepage;
