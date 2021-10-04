import styled from "styled-components";
import Schriftzug from "../Homepage/img/Schriftzug.jpg";

function HeaderHome() {
  return (
    <Wrapper>
      <Image src={Schriftzug} alt="Lakritzel"></Image>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  grid-area: header;
  background-color: black;
  color: white;
  margin: 0 auto;
`;

const Image = styled.img`
  height: 6rem;
  padding: 0;
`;
export default HeaderHome;
