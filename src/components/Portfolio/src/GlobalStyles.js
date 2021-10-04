import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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
  @media only screen and (max-width: 375px) {
     max-width: 375px;
     margin:0;
    }
}

ul {
  margin: 0;
} 

body {
 background-color: black;
  text-align: center;
  font-family: 'PT Serif', serif;
  margin: 0px 20px 0px 20px;

   @media only screen and (max-width: 375px) {
     max-width: 375px;
     margin:0;
    }
}`;

export default GlobalStyle;
