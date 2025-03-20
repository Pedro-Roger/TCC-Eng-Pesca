import { useState, useEffect } from 'react';
import { GiFlour, GiMountainCave, GiWeight } from 'react-icons/gi';
import { PiShrimpFill } from 'react-icons/pi';
import { FaCalculator, FaWeightHanging, FaWeightScale } from 'react-icons/fa6';

import { Button, Flex, Heading, Box, Text, Input } from '@chakra-ui/react';
import { useProjetos } from '../context/ProjetosContext';
import { BiLayer } from 'react-icons/bi';

const PlanejamentoCamarao = () => {
  const [areaVolume, setAreaVolume] = useState<number>(0);
  const [pesoMedioDesejado, setPesoMedioDesejado] = useState<number>(0);
  const [pesoTotalDesejado, setPesoTotalDesejado] = useState<number>(0);
  const [quantidadeAnimais, setQuantidadeAnimais] = useState<number>(0);
  const [fcaEstimado, setFcaEstimado] = useState<number>(0);
  const [quantidadeRacao, setQuantidadeRacao] = useState<number>(0);
  const [quantidadeSacas, setQuantidadeSacas] = useState<number>(0);
  const [densidade, setDensidade] = useState<number>(0);

  const { adicionarProjeto } = useProjetos();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calcularPlanejamento = () => {
    const qtdAnimais = pesoTotalDesejado / (pesoMedioDesejado / 1000);
    setQuantidadeAnimais(qtdAnimais);

    const qtdRacao = fcaEstimado * pesoTotalDesejado;
    setQuantidadeRacao(qtdRacao);

    const qtdSacas = qtdRacao / 25;
    setQuantidadeSacas(qtdSacas);

    const densidadeAnimal = qtdAnimais / areaVolume;
    setDensidade(densidadeAnimal);
  };

  useEffect(() => {
    if (
      areaVolume > 0 &&
      pesoMedioDesejado > 0 &&
      pesoTotalDesejado > 0 &&
      fcaEstimado > 0
    ) {
      calcularPlanejamento();
    }
  }, [
    areaVolume,
    pesoMedioDesejado,
    pesoTotalDesejado,
    fcaEstimado,
    calcularPlanejamento,
  ]);

  const handleInputChange = (field: string, value: string) => {
    const parsedValue = parseFloat(value) || 0;

    if (field === 'areaVolume') {
      setAreaVolume(parsedValue);
    } else if (field === 'pesoTotalDesejado') {
      setPesoTotalDesejado(parsedValue);
    } else if (field === 'pesoMedioDesejado') {
      setPesoMedioDesejado(parsedValue);
    } else if (field === 'fcaEstimado') {
      setFcaEstimado(parsedValue);
    }
  };

  const handleSave = () => {
    const novoProjeto = {
      id: new Date().getTime(),
      tipo: 'tilapia',
      area: areaVolume,
      pesoTotal: pesoTotalDesejado,
      pesoMedio: pesoMedioDesejado,
      fcaEstimado: fcaEstimado,
      quantidadeAnimais: quantidadeAnimais,
      quantidadeRacao: quantidadeRacao,
      quantidadeSacas: quantidadeSacas,
      densidadeAnimal: densidade,
    };

    adicionarProjeto(novoProjeto);
    alert('Projeto salvo com sucesso!');
  };

  return (
    <Flex
      as="form"
      flexDirection="column"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <Heading
        as="h1"
        fontSize={{ base: '25px', lg: '30px' }}
        color="aliceblue"
        fontWeight={700}
        textAlign={'center'}
        marginTop="30px"
      >
        Planejamento Tilápia
      </Heading>

      <Flex
        flexWrap="wrap"
        padding={{ base: '30px', lg: '100px' }}
        justifyContent="center"
        gap="20px"
      >
        {[
          {
            icon: <GiMountainCave size={40} color={'aliceblue'} />,
            label: 'Volume do Viveiro (m3)',
            value: areaVolume,
            onChange: (e: { target: { value: string } }) =>
              handleInputChange('areaVolume', e.target.value),
          },
          {
            icon: <FaWeightHanging size={40} color={'aliceblue'} />,
            label: 'Peso Total Desejado (kg)',
            value: pesoTotalDesejado,
            onChange: (e: { target: { value: string } }) =>
              handleInputChange('pesoTotalDesejado', e.target.value),
          },
          {
            icon: <FaWeightScale size={40} color={'aliceblue'} />,
            label: 'Peso Médio Desejado (g)',
            value: pesoMedioDesejado,
            onChange: (e: { target: { value: string } }) =>
              handleInputChange('pesoMedioDesejado', e.target.value),
          },
          {
            icon: <FaCalculator size={40} color={'aliceblue'} />,
            label: 'FCA Estimado',
            value: fcaEstimado,
            onChange: (e: { target: { value: string } }) =>
              handleInputChange('fcaEstimado', e.target.value),
          },
          {
            icon: <PiShrimpFill size={40} color={'aliceblue'} />,
            label: 'Quantidade de Animais',
            value: quantidadeAnimais,
            readOnly: true,
          },
          {
            icon: <GiFlour size={40} color={'aliceblue'} />,
            label: 'Quantidade de Ração (kg)',
            value: quantidadeRacao,
            readOnly: true,
          },
          {
            icon: <GiWeight size={40} color={'aliceblue'} />,
            label: 'Quantidade de Sacas',
            value: quantidadeSacas,
            readOnly: true,
          },
          {
            icon: <BiLayer size={40} color={'aliceblue'} />,
            label: 'Densidade (animais/m²)',
            value: densidade,
            readOnly: true,
          },
        ].map((item, index) => (
          <Box
            key={index}
            flex={{ base: '1 1 calc(50% - 10px)', md: '1 1 calc(25% - 20px)' }}
            maxWidth={{ base: 'calc(50% - 10px)', md: 'calc(25% - 20px)' }}
          >
            <Text
              fontSize={{ base: '12px', md: '16px' }}
              fontWeight="bold"
              color="aliceblue"
              mb="8px"
            >
              {item.label}
            </Text>
            <Flex
              bg="#00000d"
              color="aliceblue"
              borderRadius="8px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              padding="10px"
              alignItems="center"
            >
              <Box mr="10px">{item.icon}</Box>
              <Input
                placeholder={
                  item.readOnly ? 'Calculado automaticamente' : 'Digite aqui'
                }
                type="number"
                value={item.value}
                onChange={item.onChange}
                readOnly={item.readOnly}
                flex={1}
                border="none"
                _focus={{ boxShadow: 'none' }}
                color="aliceblue"
              />
            </Flex>
          </Box>
        ))}
      </Flex>

      <Button
        type="submit"
        w={'164px'}
        h={'50px'}
        bg={'transparent'}
        color={'aliceblue'}
        border={'1px solid aliceblue'}
        _hover={{ bg: 'aliceblue', color: 'black' }}
        ml={{ base: '0px', md: '150px' }}
        mt={'30px'}
        fontSize={'16px'}
        fontWeight={'bold'}
        alignSelf={{ base: 'center', md: '' }}
      >
        Salvar
      </Button>
    </Flex>
  );
};

export default PlanejamentoCamarao;
