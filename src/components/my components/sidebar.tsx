import { Button, VStack, HStack, Icon, Text } from '@chakra-ui/react';
import { FaHouse } from 'react-icons/fa6';
import { FiPlusCircle } from 'react-icons/fi';
import { FaTasks, FaUsers } from 'react-icons/fa';
import { AiOutlineTable } from 'react-icons/ai';
import { FaWeightScale } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { ComponentType } from 'react';

const SideBar = () => {
  const navigate = useNavigate();

  const SidebarButton = ({
    children,
    icon: IconComponent,
    onClick,
  }: {
    children: string;
    icon: ComponentType;
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
        <HStack p={3}>
          <Icon as={IconComponent} />
          <Text>{children}</Text>
        </HStack>
      </Button>
    );
  };

  return (
    <VStack
      display={{ base: 'none', md: 'block' }}
      color={'aliceblue'}
      bg="#00000d"
      w={'279px'}
      h={'100vh'}
      padding={'20px'}
      gap={'20px'}
      overflowY="auto"
    >
      <Button
        bg={'none'}
        color={'aliceblue'}
        fontSize={'20px'}
        borderRadius={'0px'}
        mb={'20px'}
        mt={'20px'}
        onClick={() => navigate('/')}
      >
        <HStack p={3}>
          <Icon as={FiPlusCircle} />
          <Text>Novo Projeto</Text>
        </HStack>
      </Button>
      
      <SidebarButton icon={FaHouse} onClick={() => navigate('/DashBoard')}>
        DashBoard
      </SidebarButton>
      
      <SidebarButton icon={FaTasks} onClick={() => navigate('/ListaProjetos')}>
        Lista de projetos
      </SidebarButton>

      <SidebarButton icon={AiOutlineTable} onClick={() => navigate('/TabelaArracoamento')}>
        Tabela de Arraçoamento
      </SidebarButton>
      
      <SidebarButton icon={FaWeightScale} onClick={() => navigate('/Biometria')}>
        Biometria
      </SidebarButton>
      
      <SidebarButton icon={FaUsers} onClick={() => navigate('/Equipe')}>
        Equipe
      </SidebarButton>
    </VStack>
  );
};

export default SideBar;