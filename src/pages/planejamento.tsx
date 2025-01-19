import React, { useEffect, useState } from "react";
import { GiFlour, GiMountainCave, GiWeight } from "react-icons/gi";
import { PiShrimpFill } from "react-icons/pi";
import { FaCalculator, FaClock, FaWeightHanging, FaWeightScale } from "react-icons/fa6";
import { StyledInput, StyledBox, IconWrapper, LabelText } from "./StyledInputs";

const Planejamento = () => {
  const [areaVolume, setAreaVolume] = useState<number>(0);
  const [pesoMedioDesejado, setPesoMedioDesejado] = useState<number>(0);
  const [pesoTotalDesejado, setPesoTotalDesejado] = useState<number>(0);
  const [quantidadeAnimais, setQuantidadeAnimais] = useState<number>(0);
  const [fcaEstimado, setFcaEstimado] = useState<number>(0);
  const [quantidadeRacao, setQuantidadeRacao] = useState<number>(0);
  const [quantidadeSacas, setQuantidadeSacas] = useState<number>(0);
  const [densidade, setDensidade] = useState<number>(0);

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
    if (areaVolume > 0 && pesoMedioDesejado > 0 && pesoTotalDesejado > 0 && fcaEstimado > 0) {
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

  return (
    <>
      <h1 style={{ fontSize: "40px", color: "aliceblue", fontWeight: 400, marginLeft: "150px", marginTop: "10px" }}>
        Planejamento
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", padding: "100px", marginLeft: "50px", gap: "50px" }}>
        {/* Área ou Volume */}
        <StyledBox>
          <IconWrapper>
            <GiMountainCave size={40} color={"aliceblue"} />
          </IconWrapper>
          <div>
            <LabelText>Área (m2) ou Volume (L)</LabelText>
            <StyledInput
              placeholder="Digite aqui"
              type="number"
              value={areaVolume}
              onChange={(e) => handleInputChange("areaVolume", e.target.value)}
            />
          </div>
        </StyledBox>

        {/* Peso Total Desejado */}
        <StyledBox>
          <IconWrapper>
            <FaWeightHanging size={40} color={"aliceblue"} />
          </IconWrapper>
          <div>
            <LabelText>Peso Total Desejado (kg)</LabelText>
            <StyledInput
              placeholder="Digite aqui"
              type="number"
              value={pesoTotalDesejado}
              onChange={(e) => handleInputChange("pesoTotalDesejado", e.target.value)}
            />
          </div>
        </StyledBox>

        {/* Peso Médio Desejado */}
        <StyledBox>
          <IconWrapper>
            <FaWeightScale size={40} color={"aliceblue"} />
          </IconWrapper>
          <div>
            <LabelText>Peso Médio Desejado (g)</LabelText>
            <StyledInput
              placeholder="Digite aqui"
              type="number"
              value={pesoMedioDesejado}
              onChange={(e) => handleInputChange("pesoMedioDesejado", e.target.value)}
            />
          </div>
        </StyledBox>

        {/* FCA Estimado */}
        <StyledBox>
          <IconWrapper>
            <FaCalculator size={40} color={"aliceblue"} />
          </IconWrapper>
          <div>
            <LabelText>FCA Estimado</LabelText>
            <StyledInput
              placeholder="Digite aqui"
              type="number"
              value={fcaEstimado}
              onChange={(e) => handleInputChange("fcaEstimado", e.target.value)}
            />
          </div>
        </StyledBox>

        {/* Quantidade de Animais */}
        <StyledBox>
          <IconWrapper>
            <PiShrimpFill size={40} color={"aliceblue"} />
          </IconWrapper>
          <div>
            <LabelText>Quantidade de Animais</LabelText>
            <StyledInput
              placeholder="Calculado automaticamente"
              type="number"
              value={quantidadeAnimais}
              readOnly
            />
          </div>
        </StyledBox>

        {/* Quantidade de Ração */}
        <StyledBox>
          <IconWrapper>
            <GiFlour size={40} color={"aliceblue"} />
          </IconWrapper>
          <div>
            <LabelText>Quantidade de Ração (kg)</LabelText>
            <StyledInput
              placeholder="Calculado automaticamente"
              type="number"
              value={quantidadeRacao}
              readOnly
            />
          </div>
        </StyledBox>

        {/* Quantidade de Sacas */}
        <StyledBox>
          <IconWrapper>
            <GiWeight size={40} color={"aliceblue"} />
          </IconWrapper>
          <div>
            <LabelText>Quantidade de Sacas (25kg)</LabelText>
            <StyledInput
              placeholder="Calculado automaticamente"
              type="number"
              value={quantidadeSacas}
              readOnly
            />
          </div>
        </StyledBox>

        {/* Densidade */}
        <StyledBox>
          <IconWrapper>
            <FaClock size={40} color={"aliceblue"} />
          </IconWrapper>
          <div>
            <LabelText>Densidade (animais/m²)</LabelText>
            <StyledInput
              placeholder="Calculado automaticamente"
              type="number"
              value={densidade}
              readOnly
            />
          </div>
        </StyledBox>
      </div>
    </>
  );
};

export default Planejamento;
