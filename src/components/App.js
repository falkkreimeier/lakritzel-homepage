import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Shop from "./Lakritzel2";
import Reception from "./Reception";
import Lakritzel from "./Lakritzel";
import Lakritzel2 from "./Shop";
import Quote from "./Quote";
import Quote2 from "./Quote2";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Wrapper>
      <Header />
      <Lakritzel />
      <Reception />
      <Lakritzel2 />
      <Quote />
      <Quote2 />
      <Shop />
      <Portfolio />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 0px 50px 0px 50px;
  border: 1px solid black;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    "header header header header"
    "quote reception reception quote2"
    "lakritzel1 lakritzel2 shop portfolio"
    "footer footer footer footer";
  grid-gap: 2px;
`;

export default App;
