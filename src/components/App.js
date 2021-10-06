import styled, { css } from "styled-components";
import HeaderHome from "./Homepage/Header";
import FooterHome from "./Homepage/Footer";
import Lakritzel2 from "./Homepage/Lakritzel2";
import Reception from "./Homepage/Reception";
import Lakritzel from "./Homepage/Lakritzel";
import Shop from "./Homepage/Shop";
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
    alert("clicked Button");
    setShowShop(!showShop);
  };
  console.log(handleShowShopButtonClick);
  return (
    <div>
      <HeaderHome />
      <Switch>
        <Route exact path="/">
          <FlipCard showShop={showShop}>
            <FlipCardFront>
              <Lakritzel />
              <Reception />
              <Lakritzel2 />
              <Quote />
              <Quote2 />
              <Shop showShopButton={handleShowShopButtonClick} />
              <PortfolioLink />
              <FooterHome />
            </FlipCardFront>

            <FlipCardBack>
              <Lakritzel2 />
              <Footer />
            </FlipCardBack>
          </FlipCard>
        </Route>

        <Route exact path="/Portfolio">
          <Container>
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
          </Container>
        </Route>
      </Switch>
    </div>
  );
}

const Container = styled.section`
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

export const Linkto = styled(Link)`
  position: relative;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  margin: 0 0 20px 0;
  border-radius: 40px 40px 40px 40px;
  background-color: white;
  font-family: "Inter", sans-serif;
  color: black;
  box-shadow: 5px 5px 10px 5px black;
  z-index: 1;
  &:hover {
    background-color: black;
    box-shadow: 0px 0px 5px 5px grey;
    color: white;
  }
`;

const FlipCard = styled.section`
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
  margin: 0px auto;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 25px;
  max-width: 1200px;
  display: grid;
  grid-template-areas:
    "header header header header"
    "quote reception reception quote2"
    "lakritzel1 lakritzel2 shop portfolioLink"
    "footer footer footer footer";
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
      "footer";
    /* margin: 0 auto; */
  }
`;

const FlipCardBack = styled.section`
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border: 1px solid black;
  border-radius: 25px;
  display: grid;
  grid-template-areas:
    "header header"
    "formular lakritzel2"
    "footer footer";
  grid-gap: 2px;
  @media only screen and (max-width: 1000px) {
    max-width: 375px;
    grid-gap: 6px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    grid-template-areas:
      "header"
      "lakritzel2"
      "Footer";
    margin: 0 auto;
  }
`;

export default App;
