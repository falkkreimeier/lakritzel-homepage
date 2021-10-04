import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}

* {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
    background-color: black;

     @media only screen and (max-width: 375px) {
         max-width: 375px;
     }
}

`;

export default GlobalStyles;
