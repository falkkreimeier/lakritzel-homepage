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
  /* grid-area: header; */
  max-width: 1200px;
  display: flex;
  justify-content: center;
  grid-area: header;
  background-color: black;
  color: white;
`;

const Image = styled.img`
  height: 6rem;
  padding: 0;
`;
export default HeaderHome;
