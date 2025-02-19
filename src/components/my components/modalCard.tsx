import { Button, Flex, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react"


const ModalCard = ({ closeModal  } : { closeModal: () => void }) => {
    return (
        <Flex
            w={"400px"}
            h={"100vh"}
            flexDirection={"column"}
            gap={"20px"}
            mt={"150px"}
            ml={"-200px"}
            alignItems={"center"}

        >

            <Flex
                flexDirection={"column"}
                w={"300px"}
                h={"300px"}
                gap={"15px"}
                bg={"linear-gradient(to bottom, #091219, #10243E)"}
                border={"1px solid aliceblue"}
                borderRadius={"8px"}
                align={"center"}

            >
                <Text color={"aliceblue"} fontSize={"20px"} mt={"20px"}>Adicionar Membro</Text>
                <Input w={"280px"} placeholder="Nome" />
                <Input w={"280px"} placeholder="Cargo" />
                <Input w={"280px"} placeholder="Idade" />

                <Flex gap={"30px"}>
                    <Button bg={"#00000d"} color={"aliceblue"} w={"120px"}>Salvar</Button>
                    <Button bg={"#1d2757"}  color={"aliceblue"}  onClick={closeModal} w={"120px"}>Cancelar</Button>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default ModalCard;