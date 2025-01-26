import React, { useState, useEffect } from "react";
import { GiFlour, GiMountainCave, GiWeight } from "react-icons/gi";
import { PiShrimpFill } from "react-icons/pi";
import {
  FaCalculator,
  FaClock,
  FaWeightHanging,
  FaWeightScale,
} from "react-icons/fa6";
import * as S from "./StyledInputs";
import { Button, Flex } from "@chakra-ui/react";
import { useProjetos } from "../context/ProjetosContext"; 

const PlanejamentoCamarao = () => {
  const [areaVolume, setAreaVolume] = useState<number>(0);
  const [pesoMedioDesejado, setPesoMedioDesejado] = useState<number>(0);
  const [pesoTotalDesejado, setPesoTotalDesejado] = useState<number>(0);
  const [quantidadeAnimais, setQuantidadeAnimais] = useState<number>(0);
  const [fcaEstimado, setFcaEstimado] = useState<number>(0);
  const [quantidadeRacao, setQuantidadeRacao] = useState<number>(0);
  const [quantidadeSacas, setQuantidadeSacas] = useState<number>(0);
  const [densidade, setDensidade] = useState<number>(0);

  const { adicionarProjeto} = useProjetos(); 

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
  }, [areaVolume, pesoMedioDesejado, pesoTotalDesejado, fcaEstimado]);

  const handleInputChange = (field: string, value: string) => {
    const parsedValue = parseFloat(value) || 0;

    if (field === "areaVolume") {
      setAreaVolume(parsedValue);
    } else if (field === "pesoTotalDesejado") {
      setPesoTotalDesejado(parsedValue);
    } else if (field === "pesoMedioDesejado") {
      setPesoMedioDesejado(parsedValue);
    } else if (field === "fcaEstimado") {
      setFcaEstimado(parsedValue);
    }
  };

  const handleSave = () => {
    const novoProjeto = {
      id: new Date().getTime(),
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
    alert("Projeto salvo com sucesso!");
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
      <h1
        style={{
          fontSize: "40px",
          color: "aliceblue",
          fontWeight: 400,
          marginLeft: "150px",
          marginTop: "10px",
        }}
      >
        Planejamento Camarão
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "100px",
          marginLeft: "50px",
          gap: "50px",
        }}
      >
        <S.StyledBox>
          <S.IconWrapper>
            <GiMountainCave size={40} color={"aliceblue"} />
          </S.IconWrapper>
          <div>
            <S.LabelTextArea>Área do Viveiro (m2) </S.LabelTextArea>
            <S.StyledInput
              placeholder="Digite aqui"
              type="number"
              value={areaVolume}
              onChange={(e) => handleInputChange("areaVolume", e.target.value)}
            />
          </div>
        </S.StyledBox>

        <S.StyledBox>
          <S.IconWrapper>
            <FaWeightHanging size={40} color={"aliceblue"} />
          </S.IconWrapper>
          <div>
            <S.LabelTextPesoTotal>
              Peso Total Desejado (kg)
            </S.LabelTextPesoTotal>
            <S.StyledInput
              placeholder="Digite aqui"
              type="number"
              value={pesoTotalDesejado}
              onChange={(e) =>
                handleInputChange("pesoTotalDesejado", e.target.value)
              }
            />
          </div>
        </S.StyledBox>

        <S.StyledBox>
          <S.IconWrapper>
            <FaWeightScale size={40} color={"aliceblue"} />
          </S.IconWrapper>
          <div>
            <S.LabelTextPesoMedio>Peso Médio Desejado (g)</S.LabelTextPesoMedio>
            <S.StyledInput
              placeholder="Digite aqui"
              type="number"
              value={pesoMedioDesejado}
              onChange={(e) =>
                handleInputChange("pesoMedioDesejado", e.target.value)
              }
            />
          </div>
        </S.StyledBox>

        <S.StyledBox>
          <S.IconWrapper>
            <FaCalculator size={40} color={"aliceblue"} />
          </S.IconWrapper>
          <div>
            <S.LabelTextFca>FCA Estimado</S.LabelTextFca>
            <S.StyledInput
              placeholder="Digite aqui"
              type="number"
              value={fcaEstimado}
              onChange={(e) => handleInputChange("fcaEstimado", e.target.value)}
            />
          </div>
        </S.StyledBox>

        <S.StyledBox>
          <S.IconWrapper>
            <PiShrimpFill size={40} color={"aliceblue"} />
          </S.IconWrapper>
          <div>
            <S.LabelTextQtdA>Quantidade de Animais</S.LabelTextQtdA>
            <S.StyledInput
              placeholder="Calculado automaticamente"
              type="number"
              value={quantidadeAnimais}
              readOnly
            />
          </div>
        </S.StyledBox>

        <S.StyledBox>
          <S.IconWrapper>
            <GiFlour size={40} color={"aliceblue"} />
          </S.IconWrapper>
          <div>
            <S.LabelTextQtdR>Quantidade de Ração (kg)</S.LabelTextQtdR>
            <S.StyledInput
              placeholder="Calculado automaticamente"
              type="number"
              value={quantidadeRacao}
              readOnly
            />
          </div>
        </S.StyledBox>

        <S.StyledBox>
          <S.IconWrapper>
            <GiWeight size={40} color={"aliceblue"} />
          </S.IconWrapper>
          <div>
            <S.LabelTextQtdS>Quantidade de Sacas (25kg)</S.LabelTextQtdS>
            <S.StyledInput
              placeholder="Calculado automaticamente"
              type="number"
              value={quantidadeSacas}
              readOnly
            />
          </div>
        </S.StyledBox>

        <S.StyledBox>
          <S.IconWrapper>
            <FaClock size={40} color={"aliceblue"} />
          </S.IconWrapper>
          <div>
            <S.LabelTextDensidade>Densidade (animais/m²)</S.LabelTextDensidade>
            <S.StyledInput
              placeholder="Calculado automaticamente"
              type="number"
              value={densidade}
              readOnly
            />
          </div>
        </S.StyledBox>
      </div>

      <Button
        type="submit"
        w={"164px"}
        h={"50px"}
        bg={"transparent"}
        color={"aliceblue"}
        border={"1px solid aliceblue"}
        _hover={{ bg: "aliceblue", color: "black" }}
        ml={"150px"}
        mt={"-60px"}
        fontSize={"16px"}
        fontWeight={"bold"}
      >
        Salvar
      </Button>
    </Flex>
  );
};

export default PlanejamentoCamarao;
