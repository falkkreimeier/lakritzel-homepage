import styled, { css } from "styled-components";
import Header from "./Homepage/Header";
import Footer from "./Homepage/Footer";
import Shop from "./Homepage/Lakritzel2";
import Reception from "./Homepage/Reception";
import Lakritzel from "./Homepage/Lakritzel";
import Lakritzel2 from "./Homepage/Shop";
import Quote from "./Homepage/Quote";
import Quote2 from "./Homepage/Quote2";
import Portfolio from "./Homepage/Portfolio";

function App() {
  return (
    <div>
      <FlipCard>
        <FlipCardFront>
          <Header />
          <Lakritzel />
          <Reception />
          <Lakritzel2 />
          <Quote />
          <Quote2 />
          <Shop />
          <Portfolio />
          <Footer />
        </FlipCardFront>

        <FlipCardBack>
          <Header />
          <Footer />
        </FlipCardBack>
      </FlipCard>
    </div>
  );
}

const FlipCard = styled.section`
  display: flex;
  justify-content: center;
  perspective: 1000px;
  padding: 0px;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;

  ${({ showDetails }) =>
    showDetails &&
    css`
      transform: rotateY(180deg);
    `}
`;

const FlipCardFront = styled.section`
  margin: 0px 80px 0px 80px;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    "header header header header"
    "quote reception reception quote2"
    "lakritzel1 lakritzel2 shop portfolio"
    "footer footer footer footer";
  grid-gap: 2px;
  @media only screen and (max-width: 800px) {
    /* max-width: 375px; */
    grid-gap: 6px;
    grid-template-areas:
      "header"
      "lakritzel2"
      "shop"
      "reception"
      "quote"
      "lakritzel1"
      "quote2"
      "portfolio"
      "footer";
    margin: 0 auto;
  }
`;

const FlipCardBack = styled.section`
  /* align-items: center;
  position: absolute; */
  backface-visibility: hidden;
  transform: rotateY(180deg);
  /* max-width: 1000px;
  margin: 0px 50px 0px 50px; */
  border: 1px solid black;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    "header header"
    "formular lakritzel2"
    "footer footer";
  grid-gap: 2px;
  @media only screen and (max-width: 800px) {
    max-width: 375px;
    grid-gap: 6px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    grid-template-areas:
      "header"
      "Footer";
    margin: 0 auto;
  }
`;

export default App;
