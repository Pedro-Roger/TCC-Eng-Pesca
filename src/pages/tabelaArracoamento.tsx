import { useState } from "react";
import * as S from "./tabelaStyled";
import { Flex, Text } from "@chakra-ui/react";

const TabelaArracoamento = () => {
  const [tanks, setTanks] = useState([]);
  const [currentTank, setCurrentTank] = useState("");
  const [numFish, setNumFish] = useState(0);
  const [avgWeight, setAvgWeight] = useState(0);
  const [feedingsPerDay, setFeedingsPerDay] = useState(1);
  const [feedingData] = useState([
    { week: 1, weight: 1, rate: 15 },
    { week: 2, weight: 3, rate: 12 },
    { week: 4, weight: 10, rate: 10 },
    { week: 6, weight: 25, rate: 8 },
    { week: 8, weight: 50, rate: 6 },
    { week: 10, weight: 100, rate: 5 },
    { week: 12, weight: 150, rate: 4 },
    { week: 14, weight: 200, rate: 3.5 },
    { week: 16, weight: 300, rate: 3 },
    { week: 18, weight: 450, rate: 2.5 },
    { week: 20, weight: 600, rate: 2 },
    { week: 22, weight: 700, rate: 1.8 },
    { week: 24, weight: 800, rate: 1.5 },
  ]);

  const handleCalculate = () => {
    const closestData = feedingData.reduce((prev, curr) =>
      Math.abs(curr.weight - avgWeight) < Math.abs(prev.weight - avgWeight)
        ? curr
        : prev
    );

    const totalWeight = numFish * avgWeight;
    const dailyFeedingRate = (closestData.rate / 100) * totalWeight;
    const feedPerFeeding = dailyFeedingRate / feedingsPerDay;

    return {
      dailyFeedingRate: dailyFeedingRate.toFixed(2),
      feedPerFeeding: feedPerFeeding.toFixed(2),
    };
  };

  const addTank = () => {
    if (!currentTank || numFish <= 0 || avgWeight <= 0 || feedingsPerDay <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const { dailyFeedingRate, feedPerFeeding } = handleCalculate();
    setTanks((prevTanks) => [
      ...prevTanks,
      {
        name: currentTank,
        numFish,
        avgWeight,
        feedingsPerDay,
        dailyFeedingRate,
        feedPerFeeding,
      },
    ]);

    setCurrentTank("");
    setNumFish(0);
    setAvgWeight(0);
    setFeedingsPerDay(1);
  };

  return (
    <S.Container>
      <Text fontSize="2xl" fontWeight="bold" mb="2rem">
        Tabela de Arraçoamento
      </Text>

      <Flex
        as="form"
        onSubmit={addTank}
        gap="1rem"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <S.InputContainer>
          <S.Label>Nome do tanque:</S.Label>
          <S.Input
            type="text"
            value={currentTank}
            onChange={(e) => setCurrentTank(e.target.value)}
            placeholder=""
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Numero de peixes:</S.Label>
          <S.Input
            type="number"
            value={numFish}
            onChange={(e) => setNumFish(Number(e.target.value))}
            placeholder="Enter number of fish"
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>Peso Médio (g):</S.Label>
          <S.Input
            type="number"
            value={avgWeight}
            onChange={(e) => setAvgWeight(Number(e.target.value))}
            placeholder="Enter average weight of fish"
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>tratos por dia :</S.Label>
          <S.Input
            type="number"
            value={feedingsPerDay}
            onChange={(e) => setFeedingsPerDay(Number(e.target.value))}
            placeholder="Enter number of feedings"
          />
        </S.InputContainer>
      </Flex>

      <S.Button onClick={addTank}>Adicionar Tanque</S.Button>

      <S.TableContainer>
        <S.TableTitle>Tabela </S.TableTitle>
        {tanks.length > 0 ? (
          <S.Table>
            <thead>
              <tr>
                <S.Th>Nome do Tanque</S.Th>
                <S.Th>Número de Peixes</S.Th>
                <S.Th>Peso Médio (g)</S.Th>
                <S.Th>Alimentações/Dia</S.Th>
                <S.Th>Ração Diária (g)</S.Th>
                <S.Th>Ração por Alimentação (g)</S.Th>
              </tr>
            </thead>
            <tbody>
              {tanks.map((tank, index) => (
                <tr key={index}>
                  <S.Td>{tank.name}</S.Td>
                  <S.Td>{tank.numFish}</S.Td>
                  <S.Td>{tank.avgWeight}</S.Td>
                  <S.Td>{tank.feedingsPerDay}</S.Td>
                  <S.Td>{tank.dailyFeedingRate} g</S.Td>
                  <S.Td>{tank.feedPerFeeding} g</S.Td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        ) : (
          <S.NoData>
            Nenhum tanque cadastrado. Por favor, adicione um tanque.
          </S.NoData>
        )}
      </S.TableContainer>
    </S.Container>
  );
};

export default TabelaArracoamento;
