import { useState } from 'react';
import styled from 'styled-components';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import { useProjetos } from '../context/ProjetosContext';
import { CloseButton } from '../components/ui/close-button';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: #1b4069;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ListaProjetos = () => {
  const { projetos, removerProjeto } = useProjetos();
  const [projetoSelecionado, setProjetoSelecionado] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    setProjetoSelecionado(id);
    setIsModalOpen(true);
  };

  const confirmarExclusao = () => {
    if (projetoSelecionado !== null) {
      removerProjeto(projetoSelecionado);
    }
    setIsModalOpen(false);
  };

  return (
    <Flex
      w="100%"
      minH="50px"
      flexWrap="wrap"
      gap="20px"
      p="20px"
      justifyContent={
        projetos.length === 0 ? 'center' : { base: 'center', md: 'flex-start' }
      }
      alignItems="center"
    >
      {projetos.length === 0 ? (
        <Text fontSize="30px" fontWeight="bold">
          Não há projetos cadastrados
        </Text>
      ) : (
        projetos.map((projeto) => (
          <Box
            key={projeto.id}
            w={{ base: '90%', md: '300px' }}
            p="20px"
            borderRadius="10px"
            bg="teal.500"
            color="white"
            boxShadow="lg"
            position="relative"
          >
            <CloseButton
              position="absolute"
              top="10px"
              right="10px"
              size="lg"
              color="white"
              onClick={() => handleDelete(projeto.id)}
              _hover={{ bg: 'red.500' }}
            />
            <Text fontSize="lg" fontWeight="bold">
              {projeto.tipo === 'camarão'
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

      {isModalOpen && (
        <Overlay>
          <ModalContainer>
            <Text fontSize="20px" fontWeight="bold" mb="10px">
              Confirmar Exclusão
            </Text>
            <Text>Tem certeza de que deseja excluir este projeto?</Text>
            <Flex mt="20px" justify="center" gap="10px">
              <Button
                w={'80px'}
                h={'40px'}
                colorScheme="red"
                onClick={confirmarExclusao}
              >
                Excluir
              </Button>
              <Button
                w={'80px'}
                h={'40px'}
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </Button>
            </Flex>
          </ModalContainer>
        </Overlay>
      )}
    </Flex>
  );
};

export default ListaProjetos;
