import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate(); 

  return (
    <Flex flexDirection="column" bg="#11444A">
      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => navigate("/")} 
      >
        Novo Projeto
      </Button>
      <Box borderBottom="1px solid" borderColor="white.600" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => navigate("/ListaProjetos")} 
      >
        Lista de Projetos
      </Button>
      <Box borderBottom="1px solid" borderColor="white.600" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        // onClick={() => navigate("/EmAndamento")} 
      >
        Em Andamento
      </Button>
      <Box borderBottom="1px solid" borderColor="white.600" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => navigate("/Biometria")} 
      >
        Biometria
      </Button>
      <Box borderBottom="1px solid" borderColor="white.600" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => navigate("/TabelaArracoamento")} 
      >
        Tabela de Arraçoamento
      </Button>
      <Box borderBottom="1px solid" borderColor="white.600" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        // onClick={() => navigate("/Equipe")} 
      >
        Equipe
      </Button>
    </Flex>
  );
};

export default Menu;