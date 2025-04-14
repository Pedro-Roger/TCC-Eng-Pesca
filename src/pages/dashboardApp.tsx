import { Button, Flex, Text } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { FaWeight } from 'react-icons/fa';

const DashboardApp = () => {
  return (
    <Flex
      w={'100%'}
      h={'100vh'}
      flexDirection={'column'}
      alignItems={'start'}
      p={'40px'}
      gap={'50px'}
    >
      <Flex w={'100%'} justifyContent={'space-between'} alignItems="center">
        <Flex direction="column">
          <Text fontSize="30px">Dashboard</Text>
          <Text fontSize="20px">Overview of your aquaculture farm</Text>
        </Flex>

        {/* Botão "Relatório" e Seletor lado a lado */}
        <Flex gap="10px" alignItems="center">
          <Button bg={'#19A2AE'}>Relatório</Button>
         
           
        </Flex>
      </Flex>

      <Flex w={'100%'} justifyContent={'space-between'}>
        <Flex
          bg={'transparent'}
          w={'250px'}
          h={'200px'}
          border={'1px solid aliceblue'}
          borderRadius={'20px'}
          p="10px"
          display="flex"
          alignItems={'center'}
          direction={'column'}
        >
          <Flex mt="20px" gap="8px">
            <Text fontSize="23px">Dias de Cultivo</Text>
            <FaWeight size={25} />
          </Flex>
          <Text mt={'20px'} fontSize="27px">
            20 Dias
          </Text>
          <Text mt={'20px'} fontSize="15px">
            Restam 140 Dias
          </Text>
        </Flex>

        <Flex
          bg={'transparent'}
          w={'250px'}
          h={'200px'}
          border={'1px solid aliceblue'}
          borderRadius={'20px'}
          p="10px"
          display="flex"
          alignItems={'center'}
          direction={'column'}
        >
          <Flex mt="20px" gap="8px">
            <Text fontSize="23px">Ração ofertada</Text>
            <FaWeight size={25} />
          </Flex>
          <Text mt={'20px'} fontSize="27px">
            2.5kg / trato
          </Text>
          <Text mt={'20px'} fontSize="15px">
            10kg/ Dia
          </Text>
        </Flex>

        <Flex
          bg={'transparent'}
          w={'250px'}
          h={'200px'}
          border={'1px solid aliceblue'}
          borderRadius={'20px'}
          p="10px"
          display="flex"
          alignItems={'center'}
          direction={'column'}
        >
          <Flex mt="20px" gap="8px">
            <Text fontSize="23px">Biomassa Total</Text>
            <FaWeight size={25} />
          </Flex>
          <Text mt={'20px'} fontSize="27px">
            250kg
          </Text>
          <Text mt={'20px'} fontSize="15px">
            Meta 1000kg
          </Text>
        </Flex>

        <Flex
          bg={'transparent'}
          w={'250px'}
          h={'200px'}
          border={'1px solid aliceblue'}
          borderRadius={'20px'}
          p="10px"
          display="flex"
          alignItems={'center'}
          direction={'column'}
        >
          <Flex mt="20px" gap="8px">
            <Text fontSize="23px">Peso Médio</Text>
            <FaWeight size={25} />
          </Flex>
          <Text mt={'20px'} fontSize="27px">
            0,001kg
          </Text>
          <Text mt={'20px'} fontSize="15px">
            Semana 2
          </Text>
        </Flex>
      </Flex>

      <Flex w={'100%'} justifyContent={'space-between'} bg={'#0f253d'}>
        <Button
          w={'calc(33% - 10px)'}
          bg={'transparent'}
          color={'aliceblue'}
          _hover={{ bg: '#808080', border: '1px solid aliceblue' }}
        >
          Produção
        </Button>
        <Button
          w={'calc(33% - 10px)'}
          bg={'transparent'}
          color={'aliceblue'}
          _hover={{ bg: '#808080', border: '1px solid aliceblue' }}
        >
          Biometria
        </Button>
        <Button
          w={'calc(33% - 10px)'}
          bg={'transparent'}
          color={'aliceblue'}
          _hover={{ bg: '#808080', border: '1px solid aliceblue' }}
        >
          alimentação
        </Button>
      </Flex>
    </Flex>
  );
};

export default DashboardApp;
