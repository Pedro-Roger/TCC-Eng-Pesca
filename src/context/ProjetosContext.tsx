import React, { createContext, useContext, useState } from "react";

type Projeto = {
  id: number;
  tipo: "camarão" | "tilápia"; 
  area: number;
  pesoTotal: number;
  pesoMedio: number;
  fcaEstimado: number;
  quantidadeAnimais: number;
  quantidadeRacao: number;
  quantidadeSacas: number;
  densidadeAnimal: number;
};

type ProjetosContextData = {
  projetos: Projeto[];
  adicionarProjeto: (projeto: Omit<Projeto, "id">) => void;
  removerProjeto: (id: number) => void;
};

const ProjetosContext = createContext<ProjetosContextData | undefined>(undefined);

export const ProjetosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  const adicionarProjeto = (projeto: Omit<Projeto, "id">) => {
    const novoProjeto = { id: projetos.length + 1, ...projeto };
    setProjetos((prevProjetos) => [...prevProjetos, novoProjeto]);
  };
  
  const removerProjeto = (id: number) => {
    setProjetos((prevProjetos) => prevProjetos.filter((projeto) => projeto.id !== id));
  };

  return (
    <ProjetosContext.Provider value={{ projetos, adicionarProjeto, removerProjeto }}>
      {children}
    </ProjetosContext.Provider>
  );
};

export const useProjetos = (): ProjetosContextData => {
  const context = useContext(ProjetosContext);
  if (!context) {
    throw new Error("useProjetos deve ser usado dentro de um ProjetosProvider");
  }
  return context;
};
