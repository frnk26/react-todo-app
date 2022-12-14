import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #1e1e1e;
        color: #f1f1f1;
    }
    li{
        list-style: none;
    }
    .App{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    
`;

export default GlobalStyle;
