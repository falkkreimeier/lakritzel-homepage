import styled, { css } from "styled-components";
import HeaderHome from "./Homepage/Header";
import Lakritzel2 from "./Homepage/Lakritzel2";
import Reception from "./Homepage/Reception";
import Lakritzel from "./Homepage/Lakritzel";
import ButtonToShop from "./Homepage/ButtonToShop";
import ButtonToHomepage from "./Homepage/ButtonToHomepage";
import Quote from "./Homepage/Quote";
import Quote2 from "./Homepage/Quote2";
import PortfolioLink from "./Homepage/PortfolioLink";
import Header from "./Portfolio/src/Header";
import Footer from "./Portfolio/src/Footer";
import Welcome from "./Portfolio/src/Welcome";
import LakritzelHomepage from "./Portfolio/src/Lakritzel";
import Interests from "./Portfolio/src/Interests";
import Profile from "./Portfolio/src/Profile";
import Skills from "./Portfolio/src/Skills";
import Portfolio from "./Portfolio/src/Portfolio";
import Facts from "./Portfolio/src/Facts";
import Xing from "./Portfolio/src/Xing";
import Github from "./Portfolio/src/Github";
import Blog1 from "./Portfolio/src/Blog1";
import Blog2 from "./Portfolio/src/Blog2";
import Blog3 from "./Portfolio/src/Blog3";
import { Link, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showShop, setShowShop] = useState(false);
  const handleShowShopButtonClick = () => {
    setShowShop(!showShop);
  };
  console.log(handleShowShopButtonClick);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <FlipCard showShop={showShop}>
            <FlipCardFront>
              <HeaderHome />
              <Lakritzel />
              <Reception />
              <Lakritzel2 />
              <Quote />
              <Quote2 />
              <ButtonToShop showShopButton={handleShowShopButtonClick} />
              <PortfolioLink />
              <Footer />
            </FlipCardFront>

            <FlipCardBack>
              <HeaderHome />
              <Lakritzel2 />
              <ButtonToHomepage showShopButton={handleShowShopButtonClick} />
              <Footer />
            </FlipCardBack>
          </FlipCard>
        </Route>

        <Route exact path="/Portfolio">
          <Wrapper>
            <Header />
            <Profile />
            <Welcome />
            <Interests />
            <Skills />
            <Facts />
            <Portfolio />
            <Xing />
            <Github />
            <LakritzelHomepage />
            <Blog1 />
            <Blog2 />
            <Blog3 />
            <Footer />
          </Wrapper>
        </Route>
      </Switch>
    </div>
  );
}

const Wrapper = styled.section`
  display: grid;
  margin: 0px 20px auto;
  max-width: 100vh;
  grid-template-areas:
    "head head head head"
    "profileArea welcome welcome welcome"
    "profileArea interests skills portfolio"
    "facts xing github lakritzelHomepage"
    "facts blog1 blog2 blog3"
    "footerpf footerpf footerpf footerpf";
  grid-gap: 0.2rem;
  text-align: center;
  font-family: "PT Serif", serif;

  @media only screen and (max-width: 1000px) {
    grid-template-areas:
      "head"
      "profileArea"
      "welcome"
      "facts"
      "interests"
      "skills"
      "portfolio"
      "xing"
      "github"
      "lakritzelHomepage"
      "blog1"
      "blog2"
      "blog3"
      "footerpf";
    grid-gap: 0.5rem;
  }
`;

const FlipCard = styled.section`
  width: 1200px;
  margin: 0px 70px 0px 70px;
  perspective: 1000px;
  padding: 0px;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;

  ${({ showShop }) =>
    showShop &&
    css`
      transform: rotateY(180deg);
    `}
`;

const FlipCardFront = styled.section`
  backface-visibility: hidden;
  position: absolute;
  position: center;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    "header header header header"
    "quote reception reception quote2"
    "lakritzel1 lakritzel2 shop portfolioLink"
    "footerpf footerpf footerpf footerpf";
  grid-gap: 2px;
  @media only screen and (max-width: 1000px) {
    grid-gap: 6px;
    grid-template-areas:
      "header"
      "lakritzel2"
      "shop"
      "reception"
      "quote"
      "lakritzel1"
      "quote2"
      "portfolioLink"
      "footerpf";
  }
`;

const FlipCardBack = styled.section`
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
  border: 1px solid black;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    "header header header header"
    "formular lakritzel2 shop shop"
    "footerpf footerpf footerpf footerpf";
  grid-gap: 2px;
  @media only screen and (max-width: 1000px) {
    max-width: 375px;
    grid-gap: 6px;
    justify-content: center;
    align-items: center;
    grid-template-areas:
      "header"
      "lakritzel2"
      "shop"
      "footerpf";
    margin: 0 auto;
  }
`;

export default App;
