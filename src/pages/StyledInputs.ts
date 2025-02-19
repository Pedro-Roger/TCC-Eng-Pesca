import styled from "styled-components";

export const StyledInput = styled.input`
  border: none;
  outline: none;
  margin-top: 30px;
  font-size: 14px;
  padding: 8px;
  border-radius: 4px;
  background-color: transparent;
  color: aliceblue;
  &[type="number"] {
    -moz-appearance: textfield; 
    -webkit-appearance: none; 
    appearance: none;
  }

  
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::placeholder {
    color: white;
  }

  @media (max-width: 2560px) {
    font-size: 16px;
    padding: 12px;
  }


  @media (max-width: 1920px) {
    font-size: 15px;
    padding: 10px;
  }

 
  @media (max-width: 1400px) {
    font-size: 13px;
    padding: 7px;
  }

  @media (max-width: 1600px) {
    font-size: 13px;
    
    
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px;
    margin-top: 10px;
  }
`;

export const StyledBox = styled.div`
  background-color: #00000d;
  width: 290px;
  height: 94px;
  color: aliceblue;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  position: relative;

  

  @media (max-width: 2560px) {
    width: 320px;
    height: 110px;
  }

  @media (max-width: 1920px) {
    width: 300px;
    height: 100px;
  }

  @media (max-width: 1400px) {
    width: 250px;
    height: 85px;
  }

  @media (max-width: 1600px) {
    width: 260px;
    height: 90px;
    
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 70px;
  }
`;

export const IconWrapper = styled.div`
  margin-left: 30px;
  margin-top: 25px;
  margin-right: 40px;

  @media (max-width: 1400px) {
    margin-left: 25px;
    margin-top: 20px;
    margin-right: 35px;
  }

  @media (max-width: 1600px) {
    margin-left: 28px;
    margin-top: 23px;
    margin-right: 38px;
  }

  @media (max-width: 1920px) {
    margin-left: 32px;
    margin-top: 27px;
    margin-right: 42px;
  }

  @media (max-width: 2560px) {
    margin-left: 35px;
    margin-top: 30px;
    margin-right: 45px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 30px;
  }

  @media (max-width: 480px) {
    margin-left: 15px;
    margin-top: 15px;
    margin-right: 20px;
  }
`;

export const LabelTextArea = styled.p`
  position: absolute;
  top: -55%;
  left: -50%;
  transform: translate(64%, 50%);
  font-size: 14px;
  white-space: nowrap;
  text-align: center;

 

  @media (max-width: 2560px) {
    font-size: 16px;
    transform: translate(67%, 50%);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    transform: translate(65%, 50%);
    left: -31%;
  }

 

  @media (max-width: 1600px) {
    font-size: 14px;
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    transform: translate(60%, 50%);
    
  }


  @media (max-width: 768px) {
    font-size: 12px;
    top: -50%;
    transform: translate(60%, 50%);
  }

  @media (max-width: 480px) {
    font-size: 10px;
    top: -45%;
    transform: translate(55%, 50%);
  }
`;

export const LabelTextPesoTotal = styled.p`
  position: absolute;
  top: -55%;
  left: -50%;
  transform: translate(64%, 50%);
  font-size: 14px;
  white-space: nowrap;
  text-align: center;

 

  @media (max-width: 2560px) {
    font-size: 16px;
    transform: translate(67%, 50%);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    transform: translate(65%, 50%);
    left: -36%;
  }

 

  @media (max-width: 1600px) {
    font-size: 14px;
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    transform: translate(60%, 50%);
    
  }


  @media (max-width: 768px) {
    font-size: 12px;
    top: -50%;
    transform: translate(60%, 50%);
  }

  @media (max-width: 480px) {
    font-size: 10px;
    top: -45%;
    transform: translate(55%, 50%);
  }
`;

export const LabelTextPesoMedio = styled.p`
  position: absolute;
  top: -55%;
  left: -50%;
  transform: translate(64%, 50%);
  font-size: 14px;
  white-space: nowrap;
  text-align: center;

 

  @media (max-width: 2560px) {
    font-size: 16px;
    transform: translate(67%, 50%);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    transform: translate(65%, 50%);
    left: -36%;
  }

 

  @media (max-width: 1600px) {
    font-size: 14px;
    left: -40%;
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    transform: translate(60%, 50%);
    
  }


  @media (max-width: 768px) {
    font-size: 12px;
    top: -50%;
    transform: translate(60%, 50%);
  }

  @media (max-width: 480px) {
    font-size: 10px;
    top: -45%;
    transform: translate(55%, 50%);
  }
`;


export const LabelTextFca = styled.p`
  position: absolute;
  top: -55%;
  left: -50%;
  transform: translate(64%, 50%);
  font-size: 14px;
  white-space: nowrap;
  text-align: center;

 

  @media (max-width: 2560px) {
    font-size: 16px;
    transform: translate(67%, 50%);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    transform: translate(65%, 50%);
    left:-50px;
  }

 

  @media (max-width: 1600px) {
    font-size: 14px;
    left: -22%;
    
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    transform: translate(60%, 50%);
    
  }


  @media (max-width: 768px) {
    font-size: 12px;
    top: -50%;
    transform: translate(60%, 50%);
  }

  @media (max-width: 480px) {
    font-size: 10px;
    top: -45%;
    transform: translate(55%, 50%);
  }
`;

export const LabelTextQtdA = styled.p`
  position: absolute;
  top: -55%;
  left: -50%;
  transform: translate(64%, 50%);
  font-size: 14px;
  white-space: nowrap;
  text-align: center;

 

  @media (max-width: 2560px) {
    font-size: 16px;
    transform: translate(67%, 50%);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    transform: translate(65%, 50%);
    left: -36%;
  }

 

  @media (max-width: 1600px) {
    font-size: 14px;
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    transform: translate(60%, 50%);
    
  }


  @media (max-width: 768px) {
    font-size: 12px;
    top: -50%;
    transform: translate(60%, 50%);
  }

  @media (max-width: 480px) {
    font-size: 10px;
    top: -45%;
    transform: translate(55%, 50%);
  }
`;

export const LabelTextQtdR = styled.p`
  position: absolute;
  top: -55%;
  left: -50%;
  transform: translate(64%, 50%);
  font-size: 14px;
  white-space: nowrap;
  text-align: center;

 

  @media (max-width: 2560px) {
    font-size: 16px;
    transform: translate(67%, 50%);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    transform: translate(65%, 50%);
    left: -36%;
  }

 

  @media (max-width: 1600px) {
    font-size: 14px;
    left: -42%;
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    transform: translate(60%, 50%);
    
  }


  @media (max-width: 768px) {
    font-size: 12px;
    top: -50%;
    transform: translate(60%, 50%);
  }

  @media (max-width: 480px) {
    font-size: 10px;
    top: -45%;
    transform: translate(55%, 50%);
  }
`;

export const LabelTextQtdS = styled.p`
  position: absolute;
  top: -55%;
  left: -50%;
  transform: translate(64%, 50%);
  font-size: 14px;
  white-space: nowrap;
  text-align: center;

 

  @media (max-width: 2560px) {
    font-size: 16px;
    transform: translate(67%, 50%);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    transform: translate(65%, 50%);
    left: -36%;
  }

 

  @media (max-width: 1600px) {
    font-size: 14px;
    left: -44%;
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    transform: translate(60%, 50%);
    
  }


  @media (max-width: 768px) {
    font-size: 12px;
    top: -50%;
    transform: translate(60%, 50%);
  }

  @media (max-width: 480px) {
    font-size: 10px;
    top: -45%;
    transform: translate(55%, 50%);
  }
`;

export const LabelTextDensidade = styled.p`
  position: absolute;
  top: -55%;
  left: -50%;
  transform: translate(64%, 50%);
  font-size: 14px;
  white-space: nowrap;
  text-align: center;

 

  @media (max-width: 2560px) {
    font-size: 16px;
    transform: translate(67%, 50%);
  }

  @media (max-width: 1920px) {
    font-size: 15px;
    transform: translate(65%, 50%);
    left: -36%;
  }

 

  @media (max-width: 1600px) {
    font-size: 14px;
  }

  @media (max-width: 1400px) {
    font-size: 13px;
    transform: translate(60%, 50%);
    
  }


  @media (max-width: 768px) {
    font-size: 12px;
    top: -50%;
    transform: translate(60%, 50%);
  }

  @media (max-width: 480px) {
    font-size: 10px;
    top: -45%;
    transform: translate(55%, 50%);
  }
`;
