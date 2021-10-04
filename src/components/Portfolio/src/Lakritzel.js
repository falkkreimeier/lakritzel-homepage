import styled from "styled-components";
import Lakritzelimg from "./img/Lakritzel-Logo.svg";
import { StyledImg } from "./Github";

function LakritzelHomepage() {
  return (
    <StyledA href="https://lakritzel.com">
      <StyledLakritzel>
        <StyledImg src={Lakritzelimg} alt="Lakritzel, mein Schnaps" />
      </StyledLakritzel>
    </StyledA>
  );
}

const StyledA = styled.a`
  grid-area: lakritzelHomepage;
`;

const StyledLakritzel = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  min-width: var(--main-width);
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`;

export default LakritzelHomepage;
