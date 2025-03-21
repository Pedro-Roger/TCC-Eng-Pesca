import { Button, VStack } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  const SidebarButton = ({
    children,
    onClick,
  }: {
    children: string;
    onClick?: () => void;
  }) => {
    return (
      <Button
        bg="none"
        color="aliceblue"
        fontSize="20px"
        mt={'10px'}
        justifyContent="flex-start"
        width="100%"
        onClick={onClick}
        _hover={{
          bg: '#808080',
          border: '1px solid aliceblue',
          color: 'aliceblue',
        }}
      >
        {children}
      </Button>
    );
  };

  return (
    <>
      <VStack
        display={{ base: 'none', md: 'block' }}
        color={'aliceblue'}
        bg="#00000d"
        w={'279px'}
        h={{ base: '100vh', md: '100vh' }}
        padding={'20px'}
        gap={'20px'}
        overflowY="auto"
      >
        <Button
          bg={'none'}
          color={'aliceblue'}
          fontSize={'20px'}
          border={'1px solid aliceblue'}
          borderRadius={'0px'}
          mb={'20px'}
          mt={'20px'}
          onClick={() => navigate('/')}
        >
          Novo Projeto
          <FiPlus />
        </Button>

        <SidebarButton onClick={() => navigate('/ListaProjetos')}>
          Lista de projetos
        </SidebarButton>
        <SidebarButton>Em Andamento</SidebarButton>
        <SidebarButton onClick={() => navigate('/TabelaArracoamento')}>
          Tabela de Arraçoamento
        </SidebarButton>
        <SidebarButton onClick={() => navigate('/Biometria')}>
          Biometria
        </SidebarButton>
        <SidebarButton onClick={() => navigate('/Equipe')}>
          Equipe
        </SidebarButton>
      </VStack>
    </>
  );
};

export default SideBar;
