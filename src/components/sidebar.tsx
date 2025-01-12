import { Button, VStack } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

const SideBar = () => {

    const SidebarButton = ({ children }: { children: string }) => {
        return (
          <Button bg="none" color="aliceblue" fontSize="20px" border="none" justifyContent="flex-start" width="100%">
            {children}
          </Button>
        );
      };

    return ( 
        <>
            <VStack 
            color={"aliceblue"} 
            bg="#2C9CA9" 
            w={"279px"} 
            h={"100vh"} 
            padding={"20px"} 
            gap={"20px"} 
            overflowY="auto"
          >
            <Button
              bg={"none"} 
              color={"aliceblue"} 
              fontSize={"20px"} 
              border={"1px solid aliceblue"} 
              borderRadius={"0px"} 
              mb={"20px"} 
              mt={"20px"}
            >
              Novo Projeto
              <FiPlus />
            </Button>
  
            <SidebarButton>Lista de projetos</SidebarButton>
            <SidebarButton>Em Andamento</SidebarButton>
            <SidebarButton>Tabela de Arraçoamento</SidebarButton>
            <SidebarButton>Biometria</SidebarButton>
            <SidebarButton>Equipe</SidebarButton>
  
          </VStack>
        </>
     );
}
 
export default SideBar;