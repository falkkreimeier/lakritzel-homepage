import styled from "styled-components";
import PortfolioImg from "../Homepage/img/Portfolio.jpg";
import { Link } from "react-router-dom";
import { Text } from "../Portfolio/src/Welcome";

function PortfolioLink() {
  return (
    <Wrapper>
      <Image src={PortfolioImg} alt="Picture of a looney Lakritzel"></Image>
      <Button to="/portfolio" type="button">
        <Text>Kritzelkopf</Text>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  grid-area: portfolioLink;
  @media only screen and (max-width: 800px) {
    width: 24rem;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  height: 13rem;
  border-radius: 15px;
`;

const Button = styled(Link)`
  text-decoration: none;
  text-align: center;
  width: 120px;
  height: 25px;
  margin: 14px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: black;
  color: white;
  box-shadow: 5px 5px 5px 2px grey;
  &:hover  {
    border: 2px solid white;
    box-shadow: 10px 10px 10px 4px grey;
  }
`;
export default PortfolioLink;
