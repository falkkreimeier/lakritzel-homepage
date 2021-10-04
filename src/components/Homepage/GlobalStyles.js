import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --border-radius: 5px;
  --main-padding: 5px;
  --color-fond: black;
}

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
