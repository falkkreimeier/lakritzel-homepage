import styled from "styled-components";

function ButtonToHomepage({ handleButtonClick }) {
  return (
    <Wrapper>
      <Button onClick={handleButtonClick}>Zurück!</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 19rem;
  width: 23rem;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: shop;
  margin: 0 auto;
  @media only screen and (max-width: 800px) {
    width: 24rem;
  }
`;

const Button = styled.button`
  margin: 15px;
  border: none;
  background-color: black;
  color: white;
  width: 16rem;
  height: 16rem;
  font-size: 3rem;
  border-radius: 15px;

  box-shadow: 0px 5px 10px 5px grey;
  &:hover {
    border: 2px solid white;
    box-shadow: 0px 20px 20px 10px black;
  }
`;

export default ButtonToHomepage;
