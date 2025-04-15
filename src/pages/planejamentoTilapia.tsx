import { useState, useEffect } from 'react';
import {
  GiFlour,
  GiMountainCave,
  GiWeight,
  GiCalendarHalfYear,
} from 'react-icons/gi';
import { PiShrimpFill } from 'react-icons/pi';
import { FaCalculator, FaWeightHanging, FaWeightScale } from 'react-icons/fa6';
import { FaPercentage } from 'react-icons/fa';
import { Button, Flex, Heading, Box, Text, Input } from '@chakra-ui/react';
import { useProjetos } from '../context/ProjetosContext';
import { BiLayer } from 'react-icons/bi';

interface InputField {
  icon: JSX.Element;
  label: string;
  value: number | string;
  onChange?: (e: { target: { value: string } }) => void;
  readOnly?: boolean;
  max?: number;
  min?: number;
}

const PlanejamentoTilapia = () => {
  const [areaVolume, setAreaVolume] = useState<number>(0);
  const [pesoMedioDesejado, setPesoMedioDesejado] = useState<number>(0);
  const [pesoTotalDesejado, setPesoTotalDesejado] = useState<number>(0);
  const [quantidadeAnimais, setQuantidadeAnimais] = useState<number>(0);
  const [fcaEstimado, setFcaEstimado] = useState<number>(0);
  const [quantidadeRacao, setQuantidadeRacao] = useState<number>(0);
  const [quantidadeSacas, setQuantidadeSacas] = useState<number>(0);
  const [densidade, setDensidade] = useState<number>(0);
  const [diasCultivo, setDiasCultivo] = useState<number>(0);
  const [taxaSobrevivencia, setTaxaSobrevivencia] = useState<number>(100);
  const [producaoHectare, setProducaoHectare] = useState<number>(0);
  const [mediaCrescimentoSemanal, setMediaCrescimentoSemanal] =
    useState<number>(0);

  const { adicionarProjeto } = useProjetos();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calcularPlanejamento = () => {
    // Cálculo da quantidade de animais considerando taxa de sobrevivência
    const qtdAnimaisEstimada = pesoTotalDesejado / (pesoMedioDesejado / 1000);
    const qtdAnimaisInicial = qtdAnimaisEstimada / (taxaSobrevivencia / 100);
    setQuantidadeAnimais(qtdAnimaisInicial);

    // Cálculo da quantidade de ração
    const qtdRacao = fcaEstimado * pesoTotalDesejado;
    setQuantidadeRacao(qtdRacao);

    // Cálculo de sacas (considerando sacas de 25kg)
    const qtdSacas = qtdRacao / 25;
    setQuantidadeSacas(qtdSacas);

    // Cálculo da densidade
    const densidadeAnimal = qtdAnimaisInicial / areaVolume;
    setDensidade(densidadeAnimal);

    // Cálculo da produção por hectare
    const areaHectares = pesoTotalDesejado / areaVolume;
    const producaoPorHectare =
      areaHectares > 0 ? pesoTotalDesejado / areaVolume : 0;
    setProducaoHectare(producaoPorHectare);

    // Cálculo da média de crescimento semanal (g/semana)
    if (diasCultivo > 0 && pesoMedioDesejado > 0) {
      const semanasCultivo = diasCultivo / 7;
      const crescimentoSemanal = pesoMedioDesejado / semanasCultivo;
      setMediaCrescimentoSemanal(crescimentoSemanal);
    }
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
    diasCultivo,
    taxaSobrevivencia,
    calcularPlanejamento,
  ]);

  const handleInputChange = (field: string, value: string) => {
    const parsedValue = parseFloat(value) || 0;

    switch (field) {
      case 'areaVolume':
        setAreaVolume(parsedValue);
        break;
      case 'pesoTotalDesejado':
        setPesoTotalDesejado(parsedValue);
        break;
      case 'pesoMedioDesejado':
        setPesoMedioDesejado(parsedValue);
        break;
      case 'fcaEstimado':
        setFcaEstimado(parsedValue);
        break;
      case 'diasCultivo':
        setDiasCultivo(parsedValue);
        break;
      case 'taxaSobrevivencia':
        setTaxaSobrevivencia(Math.min(100, Math.max(0, parsedValue)));
        break;
      default:
        break;
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
      diasCultivo: diasCultivo,
      taxaSobrevivencia: taxaSobrevivencia,
      producaoHectare: producaoHectare,
      mediaCrescimentoSemanal: mediaCrescimentoSemanal,
    };

    adicionarProjeto(novoProjeto);
    alert('Projeto salvo com sucesso!');
  };

  const inputFields: InputField[] = [
    {
      icon: <GiMountainCave size={40} color={'aliceblue'} />,
      label: 'Volume do Viveiro (m3)',
      value: areaVolume,
      onChange: (e: { target: { value: string } }) =>
        handleInputChange('areaVolume', e.target.value),
      min: 0,
    },
    {
      icon: <FaWeightHanging size={40} color={'aliceblue'} />,
      label: 'Peso Total Desejado (kg)',
      value: pesoTotalDesejado,
      onChange: (e: { target: { value: string } }) =>
        handleInputChange('pesoTotalDesejado', e.target.value),
      min: 0,
    },
    {
      icon: <FaWeightScale size={40} color={'aliceblue'} />,
      label: 'Peso Médio Desejado (g)',
      value: pesoMedioDesejado,
      onChange: (e: { target: { value: string } }) =>
        handleInputChange('pesoMedioDesejado', e.target.value),
      min: 0,
    },
    {
      icon: <FaCalculator size={40} color={'aliceblue'} />,
      label: 'FCA Estimado',
      value: fcaEstimado,
      onChange: (e: { target: { value: string } }) =>
        handleInputChange('fcaEstimado', e.target.value),
      min: 0,
    },
    {
      icon: <GiCalendarHalfYear size={40} color={'aliceblue'} />,
      label: 'Dias de Cultivo',
      value: diasCultivo,
      onChange: (e: { target: { value: string } }) =>
        handleInputChange('diasCultivo', e.target.value),
      min: 0,
    },
    {
      icon: <FaPercentage size={40} color={'aliceblue'} />,
      label: 'Taxa de Sobrevivência (%)',
      value: taxaSobrevivencia,
      onChange: (e: { target: { value: string } }) =>
        handleInputChange('taxaSobrevivencia', e.target.value),
      max: 100,
      min: 0,
    },
    {
      icon: <PiShrimpFill size={40} color={'aliceblue'} />,
      label: 'Quantidade de Animais (inicial)',
      value: Math.round(quantidadeAnimais),
      readOnly: true,
    },
    {
      icon: <GiFlour size={40} color={'aliceblue'} />,
      label: 'Quantidade de Ração (kg)',
      value: quantidadeRacao.toFixed(2),
      readOnly: true,
    },
    {
      icon: <GiWeight size={40} color={'aliceblue'} />,
      label: 'Quantidade de Sacas (25kg)',
      value: quantidadeSacas.toFixed(1),
      readOnly: true,
    },
    {
      icon: <BiLayer size={40} color={'aliceblue'} />,
      label: 'Densidade (animais/m²)',
      value: densidade.toFixed(2),
      readOnly: true,
    },
    {
      icon: <GiMountainCave size={40} color={'aliceblue'} />,
      label: 'Produção por M3 (kg/M3)',
      value: producaoHectare.toFixed(2),
      readOnly: true,
    },
    {
      icon: <FaWeightScale size={40} color={'aliceblue'} />,
      label: 'Crescimento Semanal (g/sem)',
      value: mediaCrescimentoSemanal.toFixed(2),
      readOnly: true,
    },
  ];

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
        Planejamento de Tilapia
      </Heading>

      <Flex
        flexWrap="wrap"
        padding={{ base: '30px', lg: '100px' }}
        justifyContent="center"
        gap="20px"
      >
        {inputFields.map((item, index) => (
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
                max={item.max}
                min={item.min}
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

export default PlanejamentoTilapia;
