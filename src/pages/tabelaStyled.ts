import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:4rem;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Form = styled.div`
  width: 300px;
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
  
`;

export const InputContainer = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #00000d;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  width: 190;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 4rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TableContainer = styled.div`
  margin-top: 2rem;
`;

export const TableTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #00000d;
  padding: 0.75rem;
  background-color:#00000d;
  color: aliceblue;
  font-weight: semibold;
`;

export const Td = styled.td`
  border: 2px solid #00000d;
  padding: 0.75rem;
`;

export const NoData = styled.p`
  text-align: center;
  color: #777;
  margin-top: 1rem;
`;
