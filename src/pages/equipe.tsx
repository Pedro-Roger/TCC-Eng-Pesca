import {  Button, Flex, Text } from "@chakra-ui/react";
import Card from "../components/my components/card";
import ModalCard from "../components/my components/modalCard";
import { useState } from "react";

const Equipe = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      gap={"20px"}
      flexDirection={"column"}
      p={"20px"}
    >
      <Text fontSize={"35px"} color={"aliceblue"}>
        Equipe
      </Text>
     <Card />

     <Button w={"150px"} onClick={openModal}>Adicionar</Button>

    {isModalOpen && ( 
        <Flex
            position={"fixed"}
            w={"100%"}
            h={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"rgba(0, 0, 0, 0.5)"}
            zIndex={1}
            
        >
            <Flex
            
                
                
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"20px"}
                flexDirection={"column"}
                gap={"20px"}
            >
                <ModalCard />


               <Button onClick={closeModal}>Fechar</Button>

            </Flex>

        </Flex>
     )
    
    }

    </Flex>

      
  );
};

export default Equipe;
