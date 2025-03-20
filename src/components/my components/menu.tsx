import { Box, Button, Flex } from '@chakra-ui/react';
import { To, useNavigate } from 'react-router-dom';

interface MenuProps {
  onClose: () => void;
}

const Menu = ({ onClose }: MenuProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: To) => {
    navigate(path);
    onClose();
  };

  return (
    <Flex flexDirection="column" bg="#091219">
      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => handleNavigation('/')}
      >
        Novo Projeto
      </Button>
      <Box borderBottom="1px solid" borderColor="#1a1f22" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => handleNavigation('/ListaProjetos')}
      >
        Lista de Projetos
      </Button>
      <Box borderBottom="1px solid" borderColor="#1a1f22" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => handleNavigation('/EmAndamento')}
      >
        Em Andamento
      </Button>
      <Box borderBottom="1px solid" borderColor="#1a1f22" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => handleNavigation('/Biometria')}
      >
        Biometria
      </Button>
      <Box borderBottom="1px solid" borderColor="#1a1f22" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => handleNavigation('/TabelaArracoamento')}
      >
        Tabela de Arraçoamento
      </Button>
      <Box borderBottom="1px solid" borderColor="#1a1f22" />

      <Button
        color="white"
        bg="transparent"
        h="60px"
        onClick={() => handleNavigation('/Equipe')}
      >
        Equipe
      </Button>
    </Flex>
  );
};

export default Menu;
