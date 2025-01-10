import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(to bottom, #2C9CA9, #112022);
        width: 100vw;
        height: auto;
        overflow-x: hidden;  
    }

    
    ::-webkit-scrollbar {
        width: 10px;  
    }

    ::-webkit-scrollbar-track {
        background: #2C9CA9;  
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #064F57;  
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #4B9F98;  
    }
`;

