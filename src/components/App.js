import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border: 1px solid black;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
`;

export default App;
