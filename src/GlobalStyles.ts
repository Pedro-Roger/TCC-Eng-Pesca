import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(to bottom,  #000000, #091219, #0d1f2E, #10243E, #091219, #000000);
        width: 100vw;
        height: auto;
        overflow-x: hidden;  
    }

    
    ::-webkit-scrollbar {
        width: 10px;  
    }

    ::-webkit-scrollbar-track {
        background: #808080;  
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #606060;  
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #202020;  
    }
`;

