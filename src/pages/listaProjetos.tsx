import { Flex, Text, Box,  } from "@chakra-ui/react"; // Corrigir aqui
import { useProjetos } from "../context/ProjetosContext";
import { CloseButton } from "../components/ui/close-button";

const ListaProjetos = () => {
  const { projetos, removerProjeto } = useProjetos();


  const handleDelete = (id: number) => {
    const confirmar = window.confirm(
      "Tem certeza de que deseja excluir este projeto?"
    );
    if (confirmar) {
      removerProjeto(id);
      
    }
  };

  return (
    <Flex
      w={"100%"}
      minH={"100vh"}
      flexWrap={"wrap"}
      gap={"20px"}
      p={"20px"}
      justifyContent={projetos.length === 0 ? "center" : "flex-start"}
      alignItems={"center"}
    >
      {projetos.length === 0 ? (
        <Text fontSize={"30px"} fontWeight={"bold"}>
          Não há projetos cadastrados
        </Text>
      ) : (
        projetos.map((projeto) => (
          <Box
            key={projeto.id}
            w={{ base: "90%", md: "300px" }}
            p={"20px"}
            borderRadius={"10px"}
            bg={"teal.500"}
            color={"white"}
            boxShadow={"lg"}
            position={"relative"}
          >
            <CloseButton
              position="absolute"
              top="10px"
              right="10px"
              size="lg"
              color="white"
              onClick={() => handleDelete(projeto.id)}
              _hover={{ bg: "red.500" }}
            />
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {projeto.tipo === "camarão"
                ? `Área: ${projeto.area} m²`
                : `Volume: ${projeto.area} m³`}
            </Text>
            <Text>Peso total: {projeto.pesoTotal} kg</Text>
            <Text>Peso médio: {projeto.pesoMedio} g</Text>
            <Text>FCA estimado: {projeto.fcaEstimado} kg/1kg</Text>
            <Text>Quantidade de animais: {projeto.quantidadeAnimais}</Text>
            <Text>Quantidade de ração: {projeto.quantidadeRacao} kg</Text>
            <Text>Quantidade de sacas: {projeto.quantidadeSacas}</Text>
            <Text>Densidade dos animais: {projeto.densidadeAnimal}</Text>
          </Box>
        ))
      )}
    </Flex>
  );
};

export default ListaProjetos;
