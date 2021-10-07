import styled from "styled-components";
import PortfolioImg from "../Homepage/img/Portfolio.jpg";

function PortfolioLink() {
  return (
    <Wrapper>
      <Image src={PortfolioImg} alt="Picture of a looney Lakritzel"></Image>
      <Button to="/portfolio" type="button">
        Über mich
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
`;

const Image = styled.img`
  height: 13rem;
  border-radius: 15px;
`;

const Button = styled.button`
  width: 120px;
  height: 25px;
  margin: 14px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: black;
  color: white;
  box-shadow: 5px 5px 5px 2px grey;
  &:hover  {
    border: 1px solid grey;
    box-shadow: none;
  }
`;

export default PortfolioLink;
