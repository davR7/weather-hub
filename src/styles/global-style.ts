import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {margin: 0; padding: 0; border: none; outline: none; font-size: 100%; box-sizing: border-box;}
  ul {list-style: none}
  a {text-decoration: none;}
  body {font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; line-height: 1.5; 
    text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
`;
