import styled from "styled-components";

function ButtonToShop({ showShopButton }) {
  return (
    <Wrapper>
      <Button onClick={showShopButton}>HOL MICH HIER RAUS!</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 20rem;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: shop;
  @media only screen and (max-width: 1400px) {
    width: 29rem;
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
    border: 5px solid white;
    box-shadow: 0px 10px 15px 10px black;
  }
`;

export default ButtonToShop;