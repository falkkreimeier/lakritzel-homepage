import styled from "styled-components";
import PortfolioImg from "../Homepage/img/Portfolio.jpg";
import { Link } from "react-router-dom";

function PortfolioLink() {
  return (
    <Wrapper>
      <Image src={PortfolioImg} alt="Picture of a looney Lakritzel"></Image>
      <Link to="/portfolio">
        <ButtonLink type="button">Kritzelkopf</ButtonLink>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  grid-area: portfolioLink;
`;

const Image = styled.img`
  height: 13rem;
  border-radius: 15px;
`;

const ButtonLink = styled.button`
  width: 120px;
  height: 25px;
  margin: 14px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: black;
  color: white;
  box-shadow: 5px 5px 5px 2px grey;
  &:hover  {
    border: 3px solid white;
    box-shadow: 10px 10px 10px 4px black;
  }
`;

export default PortfolioLink;
