import {  Button, Flex, Text } from "@chakra-ui/react";
import Card from "../components/my components/card";
import ModalCard from "../components/my components/modalCard";
import { useState } from "react";

const Equipe = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);

    // const [cards, setCards] = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // const addCard = (newCard) => {
    //     setCards([...cards, newCard])
    //     closeModal();
    // }
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      gap={"20px"}
      flexDirection={"column"}
      
    >
      <Text ml={"40px"} mt={"40px"} fontSize={"35px"} color={"aliceblue"}>
        Equipe
      </Text>
     <Card />

    <Flex
      gap={"20px"}
    >
      
     <Button bg={"#00000d"} color={"aliceblue"} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"} ml={"20px"} mt={"20px"} w={"120px"} onClick={openModal}>Adicionar</Button>
     <Button bg={"#1d2757"} color={"aliceblue"} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}  mt={"20px"} w={"120px"} >Remover</Button>
    </Flex>

    {isModalOpen && ( 
        <Flex
            
            position={"absolute"}
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"rgba(0, 0, 0, 0.5)"}
            zIndex={1}
            flexDirection={"column"}
            gap={"20px"}
            
        >
        
                <ModalCard closeModal={closeModal} />


            

        
            

        </Flex>
     )
    
    }

    </Flex>

      
  );
};

export default Equipe;
