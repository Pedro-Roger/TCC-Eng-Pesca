import { useState, useEffect } from "react";
import { Box, Button, Input, VStack, Text, Flex } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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
  const [week, setWeek] = useState<number | string>("");
  const [numFish, setNumFish] = useState<number | string>("");
  const [totalWeight, setTotalWeight] = useState<number | string>("");
  const [data, setData] = useState<{ week: number; weight: number }[]>([]);
  const [editingWeek, setEditingWeek] = useState<number | null>(null);

  // Carrega dados do localStorage ao inicializar
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("biometriaData") || "[]");
    setData(savedData);
  }, []);

  // Salva dados no localStorage sempre que `data` muda
  useEffect(() => {
    localStorage.setItem("biometriaData", JSON.stringify(data));
  }, [data]);

  const handleAddData = () => {
    if (!week || +week <= 0) {
      alert("A semana deve ser um número positivo!");
      return;
    }
    if (!numFish || +numFish <= 0) {
      alert("A quantidade de peixes deve ser um número positivo!");
      return;
    }
    if (!totalWeight || +totalWeight <= 0) {
      alert("O peso total deve ser um número positivo!");
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

    setWeek("");
    setNumFish("");
    setTotalWeight("");
  };

  const handleEditData = (weekToEdit: number) => {
    const entryToEdit = data.find((entry) => entry.week === weekToEdit);
    if (entryToEdit) {
      setWeek(entryToEdit.week);
      setNumFish("1"); // Assume 1 peixe para simplificar
      setTotalWeight(entryToEdit.weight.toString());
      setEditingWeek(weekToEdit);
    }
  };

  const handleDeleteData = (weekToDelete: number) => {
    setData(data.filter((entry) => entry.week !== weekToDelete));
  };

  const handleResetData = () => {
    setData([]);
    localStorage.removeItem("biometriaData");
  };

  return (
    <Flex w="100%" h="100vh" p={10} gap="80px" bg="transparent">
      
      <Flex flexDirection="column" w="40%">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Registro de Biometria
        </Text>

        <VStack gap={4} align="stretch" mb={6}>
          <Text fontWeight="bold">Semana:</Text>
          <Input
            type="number"
            w="100%"
            border="1px solid #ccc"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            placeholder="Digite a semana"
          />

          <Text fontWeight="bold">Quantidade de Peixes:</Text>
          <Input
            type="number"
            w="100%"
            border="1px solid #ccc"
            value={numFish}
            onChange={(e) => setNumFish(e.target.value)}
            placeholder="Digite a quantidade de peixes"
          />

          <Text fontWeight="bold">Peso Total (g):</Text>
          <Input
            type="number"
            w="100%"
            border="1px solid #ccc"
            value={totalWeight}
            onChange={(e) => setTotalWeight(e.target.value)}
            placeholder="Digite o peso total"
          />
        </VStack>

        <Button colorScheme="blue" onClick={handleAddData} mb={6}>
          {editingWeek !== null ? "Atualizar" : "Registrar"}
        </Button>

        <Button colorScheme="red" onClick={handleResetData} mb={6}>
          Limpar Dados
        </Button>

        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Dados Registrados
        </Text>

        <Box w="100%" mb={6} p={4} borderRadius="8px" bg="white" boxShadow="md">
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

      {/* Gráfico de Crescimento */}
      <Flex flexDirection="column" w="60%">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Gráfico de Crescimento
        </Text>

        <Box
          w="100%"
          maxW="650px"
          h="320px"
          bg="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(10px)"
          borderRadius="15px"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          p={5}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid stroke="#ccc" opacity={1} vertical={false} />
              <XAxis
                tick={{ fill: "white" }}
                dataKey="week"
                domain={[1,24]} 
                type="category"
                ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}
                label={{
                  fill: "white",
                  value: "Semana",
                  position: "insideBottomRight",
                  offset: -10,
                }}
              />
              <YAxis
                tick={{ fill: "white" }}
                axisLine={false}
                label={{
                  fill: "white",
                  value: "Peso (g)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend
                iconType="line"
                wrapperStyle={{ color: "white" }}
                formatter={(value) => (
                  <span style={{ color: "white" }}>{value}</span>
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
              />
              <Line
                type="monotone"
                dataKey="weight"
                data={data}
                stroke="#82ca9d"
                strokeWidth={2}
                name="Crescimento Real"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Biometria;