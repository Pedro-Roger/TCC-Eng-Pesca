import { useState, useEffect } from "react";
import { Box, Button, Input, VStack, Text, Flex } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; 

const GlassContainer = styled.div`
  width: 650px;
  height: 320px;
  background: rgba(255, 255, 255, 0.1); /* Fundo translúcido */
  backdrop-filter: blur(10px); /* Desfoque do fundo */
  border-radius: 15px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  padding: 20px;
`;

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
  const [week, setWeek] = useState("");
  const [numFish, setNumFish] = useState("");
  const [totalWeight, setTotalWeight] = useState("");
  const [data, setData] = useState([]);
  const [editingWeek, setEditingWeek] = useState(null); // Estado para controlar a edição

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("biometriaData")) || [];
    setData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("biometriaData", JSON.stringify(data));
  }, [data]);

  const handleAddData = () => {
    if (!week || !numFish || !totalWeight || numFish <= 0 || totalWeight <= 0) {
      alert("Preencha os campos corretamente!");
      return;
    }

    const avgWeight = (totalWeight / numFish).toFixed(2);
    const newEntry = { week: parseInt(week), weight: parseFloat(avgWeight) };

    if (editingWeek !== null) {
      // Editando um dado existente
      setData(
        data.map((entry) =>
          entry.week === editingWeek ? { ...entry, weight: newEntry.weight } : entry
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

  const handleEditData = (weekToEdit) => {
    const entryToEdit = data.find((entry) => entry.week === weekToEdit);
    setWeek(entryToEdit.week);
    setNumFish(entryToEdit.numFish);
    setTotalWeight(entryToEdit.totalWeight);
    setEditingWeek(weekToEdit); 
  };

  const handleDeleteData = (weekToDelete) => {
    setData(data.filter((entry) => entry.week !== weekToDelete));
  };

  return (
    <Flex w={"100%"} h={"100vh"} display="flex" p={10} gap={"80px"}>
      <Flex flexDirection={"column"}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Registro de Biometria
        </Text>
        <VStack spacing={4} align="stretch" mb={6}>
          <Text fontWeight="bold">Semana:</Text>
          <Input
            type="number"
            w={400}
            border={"1px solid #ccc"}
            value={week}
            onChange={(e) => setWeek(e.target.value)}
            placeholder="Digite a semana"
          />

          <Text fontWeight="bold">Quantidade de Peixes:</Text>
          <Input
            type="number"
            w={400}
            border={"1px solid #ccc"}
            value={numFish}
            onChange={(e) => setNumFish(e.target.value)}
            placeholder="Digite a quantidade de peixes"
          />

          <Text fontWeight="bold">Peso Total (g):</Text>
          <Input
            type="number"
            w={400}
            border={"1px solid #ccc"}
            value={totalWeight}
            onChange={(e) => setTotalWeight(e.target.value)}
            placeholder="Digite o peso total"
          />
        </VStack>

        <Button colorScheme="blue" onClick={handleAddData} mb={6}>
          {editingWeek !== null ? "Atualizar" : "Registrar"}
        </Button>

        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Dados Registrados
        </Text>

        <Box w="100%" mb={6} p={4} borderRadius="8px" bg="#f9f9f9" boxShadow="md">
          <Box display="flex" justifyContent="space-between" fontWeight="bold" mb={2}>
            <Text color={"#2C9CA9"} w="40%">Semana</Text>
            <Text color={"#2C9CA9"} w="40%">Peso Médio (g)</Text>
            <Text color={"#2C9CA9"} w="20%" textAlign="center">Ações</Text>
          </Box>

          {data.map((entry) => (
            <Box key={entry.week} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Text color={"#2C9CA9"} w="40%">{entry.week}</Text>
              <Text color={"#2C9CA9"} w="40%">{entry.weight}</Text>
              <Flex w="20%" justifyContent="center">
                <Button
                  onClick={() => handleEditData(entry.week)}
                  colorScheme="yellow"
                  aria-label="Editar"
                  mr={2}
                  variant="ghost"
                >
                  <FaEdit />
                </Button>
                <Button
                  onClick={() => handleDeleteData(entry.week)}
                  colorScheme="red"
                  aria-label="Excluir"
                  variant="ghost"
                >
                  <FaTrashAlt />
                </Button>
              </Flex>
            </Box>
          ))}
        </Box>
      </Flex>

      <Flex flexDirection={"column"}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Gráfico de Crescimento
        </Text>

        <GlassContainer>
          <ResponsiveContainer width={600} height={300}>
            <LineChart margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid stroke="#ccc" opacity={1} vertical={false} />
              <XAxis
                tick={{ fill: "white" }}
                dataKey="week"
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
              <Legend />
              <Line
                type="monotone"
                dataKey="weight"
                data={data.length > 0 ? data : [{ week: 0, weight: 0 }]}
                stroke="#3182CE"
                strokeWidth={2.5}
                name="Peso Registrado"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="weight"
                data={idealGrowth}
                stroke="white"
                name="Crescimento Ideal"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassContainer>
      </Flex>
    </Flex>
  );
};

export default Biometria;
