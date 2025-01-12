import { Box, Button, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";
import logo from "../src/assets/logoSeaFlow.png";
import { FiPlus } from "react-icons/fi";
import { GiFlour, GiMountainCave, GiWeight } from "react-icons/gi";
import { PiShrimpFill } from "react-icons/pi";
import { FaCalculator, FaClock, FaWeightHanging, FaWeightScale } from "react-icons/fa6";
import { useState, useEffect } from "react";

const App = () => {
  const [areaVolume, setAreaVolume] = useState<number>(0);
  const [pesoMedioDesejado, setPesoMedioDesejado] = useState<number>("");
  const [pesoTotalDesejado, setPesoTotalDesejado] = useState<number>("");
  const [quantidadeAnimais, setQuantidadeAnimais] = useState<number>("");
  const [fcaEstimado, setFcaEstimado] = useState<number>("");
  const [quantidadeRacao, setQuantidadeRacao] = useState<number>("");
  const [quantidadeSacas, setQuantidadeSacas] = useState<number>("");
  const [densidade, setDensidade] = useState<number>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calcularPlanejamento = () => {
    
    const qtdAnimais = pesoTotalDesejado / (pesoMedioDesejado / 1000);
    setQuantidadeAnimais(qtdAnimais);

    const qtdRacao = fcaEstimado * pesoTotalDesejado;
    setQuantidadeRacao(qtdRacao);

    const qtdSacas = (qtdRacao / 25);
    setQuantidadeSacas(qtdSacas);

    const densidadeAnimal = qtdAnimais /areaVolume  ;
    setDensidade(densidadeAnimal);
  };

  
  useEffect(() => {
    console.log('Valores de entrada:', areaVolume, pesoMedioDesejado, pesoTotalDesejado, fcaEstimado);
    
    if (
      areaVolume > 0 &&
      pesoMedioDesejado > 0 &&
      pesoTotalDesejado > 0 &&
      fcaEstimado > 0
    ) {
      calcularPlanejamento();
    }
  }, [areaVolume, pesoMedioDesejado, pesoTotalDesejado, fcaEstimado, calcularPlanejamento]);
  
  const handleInputChange = (field: string, value: string) => {
    const parsedValue = parseFloat(value) || 0;

    if (field === "areaVolume") {
      setAreaVolume(parsedValue);
    } else if (field === "pesoTotalDesejado") {
      setPesoTotalDesejado(parsedValue);
    } else if (field === "pesoMedioDesejado") {
      setPesoMedioDesejado(parsedValue);
    } else if (field === "fcaEstimado") {
      setFcaEstimado(parsedValue);
    }
  };

  const SidebarButton = ({ children }: { children: string }) => {
    return (
      <Button bg="none" color="aliceblue" fontSize="20px" border="none" justifyContent="flex-start" width="100%">
        {children}
      </Button>
    );
  };

  return (
    <>
      <Flex as="header" bg="#11444A" color="white" align="center" boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
        <img src={logo} alt="Logo SeaFlow" width={"120px"} height={"auto"} />
        <Text as={"h1"} fontSize={"23px"} fontWeight={"black"} fontStyle={"italic"} color={"#F7F7F7"} ml={"-20px"}>
          SEAFLOW
        </Text>
      </Flex>

      <Flex as={"nav"} flex={1}>
        <VStack color={"aliceblue"} bg="#2C9CA9" w={"279px"} h={"100vh"} padding={"20px"} gap={"20px"} overflowY="auto">
          <Button bg={"none"} color={"aliceblue"} fontSize={"20px"} border={"1px solid aliceblue"} borderRadius={"0px"} mb={"20px"} mt={"20px"}>
            Novo Projeto
            <FiPlus />
          </Button>
          <SidebarButton>Lista de projetos</SidebarButton>
          <SidebarButton>Em Andamento</SidebarButton>
          <SidebarButton>Tabela de Arraçoamento</SidebarButton>
          <SidebarButton>Biometria</SidebarButton>
          <SidebarButton>Equipe</SidebarButton>
        </VStack>

        <Box flex={1} padding={4}>
          <Heading as={"h1"} fontSize={"40px"} color={"aliceblue"} fontWeight={"400"} ml={"150px"} mt={"10px"}>
            Planejamento
          </Heading>

          <Flex wrap={"wrap"} padding={"100px"} ml={"50px"} gap={"50px"}>
            <Box bg={"#064F57"} w={"290px"} h={"94px"} color={"aliceblue"} rounded="md" boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"} position={"relative"} display={"flex"}>
              <Box ml={"30px"} mt={"25px"} mr={"40px"}>
                <GiMountainCave size={40} color={"aliceblue"} />
              </Box>
              <Box>
                <Text position={"absolute"} top={"-55%"} left={"-47%"} transform={"translate(64%, 50%)"}>
                  Área (m2) ou Volume (L)
                </Text>
                <Input
                  placeholder="Digite aqui"
                  border={"none"}
                  type="number"
                  value={areaVolume}
                  onChange={(e) => handleInputChange('areaVolume', e.target.value)}
                  _focus={{ outline: "none", borderColor: "none" }}
                  mt={"20px"}
                />
              </Box>
            </Box>

            
            <Box
              bg={"#064F57"}
              w={"290px"}
              h={"94px"}
              color={"aliceblue"} 
              rounded="md" 
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              position={"relative"}
              
              
              display={"flex"}
              >
                <Box
                  ml={"30px"}
                  mt={"25px"}
                  mr={"40px"}
                  >
                  
                    <FaWeightScale size={40} color={"aliceblue"} />
                </Box>

                <Box>
                <Text
                position={"absolute"}
                top={"-55%"}
                left={"-41%"}
                transform={"translate(64%, 50%)"}
                  
                  
                >
                  Peso médio desejado
                </Text>
                
                <Input
                  placeholder="Digite aqui"
                  border={"none"}
                  type="number"
                  value={pesoMedioDesejado}
                  onChange={(e) => handleInputChange('pesoMedioDesejado', e.target.value)}
                  _focus={{ outline: "none", borderColor: "none" }}
                  mt={"20px"}
                />
                </Box> 

                
                
               
                
            </Box>

            <Box
              bg={"#064F57"}
              w={"290px"}
              h={"94px"}
              color={"aliceblue"} 
              rounded="md" 
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              position={"relative"}
              
              display={"flex"}
              >
                <Box
                  ml={"30px"}
                  mt={"25px"}
                  mr={"40px"}
                  >
                  
                    <FaWeightHanging size={40} color={"aliceblue"} />
                </Box>

                <Box>
                <Text
                position={"absolute"}
                top={"-55%"}
                left={"-38%"}
                transform={"translate(64%, 50%)"}
                  
                  
                >
                  Peso total desejado
                </Text>
                
                <Input
                  placeholder="Digite aqui"
                  border={"none"}
                  type="number"
                  value={pesoTotalDesejado}
                  onChange={(e) => handleInputChange('pesoTotalDesejado', e.target.value)}
                  _focus={{ outline: "none", borderColor: "none" }}
                  mt={"20px"}
                />
                </Box> 

                
                
               
                
            </Box>


            <Box
              bg={"#064F57"}
              w={"290px"}
              h={"94px"}
              color={"aliceblue"} 
              rounded="md" 
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              position={"relative"}
              
              display={"flex"}
              >
                <Box
                  ml={"30px"}
                  mt={"25px"}
                  mr={"40px"}
                  >
                  
                    <PiShrimpFill size={40} color={"aliceblue"} />
                </Box>

                <Box>
                <Text
                position={"absolute"}
                top={"-55%"}
                left={"-45%"}
                transform={"translate(64%, 50%)"}
                  
                  
                >
                  Quantidade de animais:
                </Text>
                
                <Input
                  placeholder={quantidadeAnimais ? quantidadeAnimais.toFixed(0)  : ""}
                  _placeholder={{
                    color: "white", 
                  }}
                  border={"none"}
                  type="number"
                  readOnly
                  _focus={{ outline: "none", borderColor: "none" }}
                  mt={"20px"}
                  
                />
                </Box> 

                
                
               
                
            </Box>

            <Box
              bg={"#064F57"}
              w={"290px"}
              h={"94px"}
              color={"aliceblue"} 
              rounded="md" 
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              position={"relative"}
              
              
              display={"flex"}
              >
                <Box
                  ml={"30px"}
                  mt={"25px"}
                  mr={"40px"}
                  >
                  
                    <FaCalculator size={40} color={"aliceblue"} />
                </Box>

                <Box>
                <Text
                position={"absolute"}
                top={"-55%"}
                left={"-27%"}
                transform={"translate(64%, 50%)"}
                  
                  
                >
                  FCA estimado
                </Text>
                
                <Input
                  placeholder="Digite aqui"
                  border={"none"}
                  step="0.01"
                  type="number"
                  value={fcaEstimado}
                  onChange={(e) => handleInputChange('fcaEstimado', e.target.value)}
                  _focus={{ outline: "none", borderColor: "none" }}
                  mt={"20px"}
                />
                </Box> 

                
                
               
                
            </Box>

            <Box
              bg={"#064F57"}
              w={"290px"}
              h={"94px"}
              color={"aliceblue"} 
              rounded="md" 
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              position={"relative"}
              
              display={"flex"}
              >
                <Box
                  ml={"30px"}
                  mt={"25px"}
                  mr={"40px"}
                  >
                  
                    <GiWeight size={40} color={"aliceblue"} />
                </Box>

                <Box>
                <Text
                position={"absolute"}
                top={"-55%"}
                left={"-41%"}
                transform={"translate(64%, 50%)"}
                  
                  
                >
                  Quantidade de Ração
                </Text>
                
                <Input
                   placeholder={quantidadeRacao ? quantidadeRacao.toFixed(2) : ""}
                  border={"none"}
                  type="number"
                  readOnly
                  _placeholder={{
                    color: "white", 
                  }}
                  
                  _focus={{ outline: "none", borderColor: "none" }}
                  mt={"20px"}
                />
                </Box> 

                
                
               
                
            </Box>



            <Box
              bg={"#064F57"}
              w={"290px"}
              h={"94px"}
              color={"aliceblue"} 
              rounded="md" 
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              position={"relative"}
              
              display={"flex"}
              >
                <Box
                  ml={"30px"}
                  mt={"25px"}
                  mr={"40px"}
                  >
                  
                    <GiFlour size={40} color={"aliceblue"} />
                </Box>

                <Box>
                <Text
                position={"absolute"}
                top={"-55%"}
                left={"-60%"}
                transform={"translate(64%, 50%)"}
                  
                  
                >
                  Quantidade de sacas de Ração
                </Text>
                
                <Input
                  placeholder={quantidadeSacas? quantidadeSacas.toFixed(0) : ""}
                  border={"none"}
                  type="number"
                  readOnly
                  _placeholder={{
                    color: "white", 
                  }}
                  _focus={{ outline: "none", borderColor: "none" }}
                  mt={"20px"}
                />
                </Box> 

                
                
               
                
            </Box>

            <Box
              bg={"#064F57"}
              w={"290px"}
              h={"94px"}
              color={"aliceblue"} 
              rounded="md" 
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              position={"relative"}
              
              
              display={"flex"}
              >
                <Box
                  ml={"30px"}
                  mt={"25px"}
                  mr={"40px"}
                  >
                  
                    <FaClock size={40} color={"aliceblue"} />
                </Box>

                <Box>
                <Text
                position={"absolute"}
                top={"-55%"}
                left={"-41%"}
                transform={"translate(64%, 50%)"}
                  
                  
                >
                  Densidade de Cultivo 
                </Text>
                
                <Input
                  placeholder={densidade ? Math.ceil(densidade).toString() : ""}
                  border={"none"}
                  type="number"
                  readOnly
                  value={densidade ? Math.ceil(densidade) : ""}
                  _focus={{ outline: "none", borderColor: "none" }}
                  mt={"20px"}
                />

                </Box> 

                
                
               
                
            </Box>



          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default App;
