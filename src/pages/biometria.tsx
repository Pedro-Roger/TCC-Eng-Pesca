import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Flex,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const idealGrowth = [
  { week: 1, weight: 5 },
  { week: 2, weight: 8 },
  { week: 4, weight: 10 },
  { week: 6, weight: 25 },
  { week: 8, weight: 50 },
  { week: 10, weight: 100 },
  { week: 12, weight: 150 },
  { week: 14, weight: 200 },
  { week: 16, weight: 300 },
  { week: 18, weight: 450 },
  { week: 20, weight: 600 },
  { week: 22, weight: 700 },
  { week: 24, weight: 800 },
];

const Biometria = () => {
  const [week, setWeek] = useState<number | string>('');
  const [numFish, setNumFish] = useState<number | string>('');
  const [totalWeight, setTotalWeight] = useState<number | string>('');
  const [data, setData] = useState<{ week: number; weight: number }[]>([]);
  const [editingWeek, setEditingWeek] = useState<number | null>(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('biometriaData') || '[]');
    setData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('biometriaData', JSON.stringify(data));
  }, [data]);

  // Função para combinar dados reais com o crescimento ideal
  const getCombinedData = () => {
    // Cria uma cópia dos dados ideais
    const combined = [...idealGrowth];
    
    // Atualiza com os dados reais quando existirem
    data.forEach(realEntry => {
      const index = combined.findIndex(entry => entry.week === realEntry.week);
      if (index !== -1) {
        combined[index] = realEntry;
      } else {
        combined.push(realEntry);
      }
    });
    
    // Ordena por semana
    return combined.sort((a, b) => a.week - b.week);
  };

  const handleAddData = () => {
    if (!week || +week <= 0) {
      alert('A semana deve ser um número positivo!');
      return;
    }
    if (!numFish || +numFish <= 0) {
      alert('A quantidade de peixes deve ser um número positivo!');
      return;
    }
    if (!totalWeight || +totalWeight <= 0) {
      alert('O peso total deve ser um número positivo!');
      return;
    }

    const avgWeight = (+totalWeight / +numFish).toFixed(2);
    const newEntry = { week: +week, weight: parseFloat(avgWeight) };

    if (editingWeek !== null) {
      setData(
        data.map((entry) =>
          entry.week === editingWeek
            ? { ...entry, weight: newEntry.weight }
            : entry
        )
      );
      setEditingWeek(null);
    } else {
      setData([...data, newEntry].sort((a, b) => a.week - b.week));
    }

    setWeek('');
    setNumFish('');
    setTotalWeight('');
  };

  const handleEditData = (weekToEdit: number) => {
    const entryToEdit = data.find((entry) => entry.week === weekToEdit);
    if (entryToEdit) {
      setWeek(entryToEdit.week);
      setNumFish('1');
      setTotalWeight(entryToEdit.weight.toString());
      setEditingWeek(weekToEdit);
    }
  };

  const handleDeleteData = (weekToDelete: number) => {
    setData(data.filter((entry) => entry.week !== weekToDelete));
  };

  const handleResetData = () => {
    setData([]);
    localStorage.removeItem('biometriaData');
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      w="100%"
      minH="100vh"
      p={{ base: 4, md: 10 }}
      gap={{ base: 4, md: 8 }}
      bg="transparent"
    >
      {/* Formulário e Dados Registrados */}
      <Flex direction="column" w={{ base: '100%', md: '40%' }} gap={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Registro de Biometria
        </Text>

        <VStack gap={4} align="stretch">
          <Text fontWeight="bold">Semana:</Text>
          <Input
            type="number"
            w="100%"
            border="1px solid #ccc"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            placeholder="Digite a semana"
            min="1"
            max="24"
          />

          <Text fontWeight="bold">Quantidade de Peixes:</Text>
          <Input
            type="number"
            w="100%"
            border="1px solid #ccc"
            value={numFish}
            onChange={(e) => setNumFish(e.target.value)}
            placeholder="Digite a quantidade de peixes"
            min="1"
          />

          <Text fontWeight="bold">Peso Total (g):</Text>
          <Input
            type="number"
            w="100%"
            border="1px solid #ccc"
            value={totalWeight}
            onChange={(e) => setTotalWeight(e.target.value)}
            placeholder="Digite o peso total"
            min="0.1"
            step="0.1"
          />
        </VStack>

        <Flex gap={4}>
          <Button
            bg="#00000d"
            color="aliceblue"
            onClick={handleAddData}
            flex={1}
          >
            {editingWeek !== null ? 'Atualizar' : 'Registrar'}
          </Button>
          <Button
            bg="#00000d"
            color="aliceblue"
            colorScheme="red"
            onClick={handleResetData}
            flex={1}
          >
            Limpar Dados
          </Button>
        </Flex>

        <Text fontSize="2xl" fontWeight="bold">
          Dados Registrados
        </Text>

        <Box w="100%" p={4} borderRadius="8px" bg="white" boxShadow="md">
          <Flex justifyContent="space-between" fontWeight="bold" mb={2}>
            <Text color="#2C9CA9" w="40%">
              Semana
            </Text>
            <Text color="#2C9CA9" w="40%">
              Peso Médio (g)
            </Text>
            <Text color="#2C9CA9" w="20%" textAlign="center">
              Ações
            </Text>
          </Flex>

          {data.map((entry) => (
            <Flex
              key={entry.week}
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Text color="#2C9CA9" w="40%">
                {entry.week}
              </Text>
              <Text color="#2C9CA9" w="40%">
                {entry.weight.toFixed(2)}
              </Text>
              <Flex w="20%" justifyContent="center">
                <Button
                  onClick={() => handleEditData(entry.week)}
                  colorScheme="yellow"
                  aria-label="Editar"
                  mr={2}
                  variant="ghost"
                >
                  ✏️
                </Button>
                <Button
                  onClick={() => handleDeleteData(entry.week)}
                  colorScheme="red"
                  aria-label="Excluir"
                  variant="ghost"
                >
                  🗑️
                </Button>
              </Flex>
            </Flex>
          ))}
        </Box>
      </Flex>

      <Flex direction="column" w={{ base: '100%', md: '60%' }} gap={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Gráfico de Crescimento
        </Text>

        <Box
          w="100%"
          h={{ base: '300px', md: '400px' }}
          bg="#00000d"
          backdropFilter="blur(10px)"
          borderRadius="15px"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          p={4}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              data={getCombinedData()}
            >
              <CartesianGrid stroke="#ccc" opacity={0.3} vertical={false} />
              <XAxis
                dataKey="week"
                domain={[1, 24]}
                type="number"
                tickCount={24}
                tick={{ fill: 'white' }}
                ticks={Array.from({ length: 24 }, (_, i) => i + 1)}
                label={{
                  fill: 'white',
                  value: 'Semana',
                  position: 'insideBottomRight',
                  offset: -10,
                }}
              />
              <YAxis
                tick={{ fill: 'white' }}
                axisLine={false}
                label={{
                  fill: 'white',
                  value: 'Peso (g)',
                  angle: -90,
                  position: 'insideLeft',
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#00000d',
                  borderColor: '#2C9CA9',
                  borderRadius: '8px',
                }}
                itemStyle={{ color: 'white' }}
                labelStyle={{ color: '#2C9CA9', fontWeight: 'bold' }}
              />
              <Legend
                iconType="line"
                wrapperStyle={{ color: 'white', paddingTop: '20px' }}
                formatter={(value) => (
                  <span style={{ color: 'white' }}>{value}</span>
                )}
              />
              <Line
                type="monotone"
                dataKey="weight"
                data={idealGrowth}
                stroke="#8884d8"
                strokeWidth={2}
                name="Crescimento Ideal"
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#82ca9d"
                strokeWidth={3}
                name="Crescimento Real"
                dot={{ fill: '#82ca9d', r: 4, strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Biometria;