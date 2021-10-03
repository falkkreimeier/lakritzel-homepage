import styled from "styled-components";

function Shop() {
  return (
    <Wrapper>
      <Button>HIER KAUFEN</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 20rem;
  width: 20rem;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: shop;
`;

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  width: 18rem;
  height: 18rem;
  font-size: 3rem;
  border-radius: 15px;

  box-shadow: 0px 5px 10px 5px grey;
  &:hover {
    border: 1px solid white;
    box-shadow: 0px 10px 15px 5px black;
  }
`;

export default Shop;
