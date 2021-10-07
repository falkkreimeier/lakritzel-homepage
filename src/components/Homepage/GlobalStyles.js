import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --border-radius: 15px;
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
    width: 100%;
    height: 100vh;

}

`;

export default GlobalStyles;
