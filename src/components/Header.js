import styled from "styled-components";
import Schriftzug from "../img/Schriftzug.jpg";

function Header() {
  return (
    <Wrapper>
      <Image src={Schriftzug} alt="Lakritzel"></Image>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  grid-area: header;
  border: 1px solid white;
  border-radius: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  grid-area: header;
  border: 1px solid white;
  background-color: black;
  color: white;
  margin: 0 auto;
`;

const Image = styled.img`
  height: 6rem;
  padding: 0;
`;
export default Header;
