import { Button, VStack } from '@chakra-ui/react';
import { FaHouse } from 'react-icons/fa6';
import { FiPlusCircle } from 'react-icons/fi';
import { FaTasks, FaUsers } from 'react-icons/fa';
import { AiOutlineTable } from 'react-icons/ai';
import { FaWeightScale } from 'react-icons/fa6';

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
        fontSize="16px"
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
          //
          borderRadius={'0px'}
          mb={'20px'}
          mt={'20px'}
          onClick={() => navigate('/')}
        >
          <FiPlusCircle />
          Novo Projeto
        </Button>
        <SidebarButton onClick={() => navigate('/DashBoard')}>
          <FaHouse />
          DashBoard
        </SidebarButton>
        <SidebarButton onClick={() => navigate('/ListaProjetos')}>
          <FaTasks />
          Lista de projetos
        </SidebarButton>

        <SidebarButton onClick={() => navigate('/TabelaArracoamento')}>
          <AiOutlineTable />
          Tabela de Arraçoamento
        </SidebarButton>
        <SidebarButton onClick={() => navigate('/Biometria')}>
          <FaWeightScale />
          Biometria
        </SidebarButton>
        <SidebarButton onClick={() => navigate('/Equipe')}>
          <FaUsers />
          Equipe
        </SidebarButton>
      </VStack>
    </>
  );
};

export default SideBar;
