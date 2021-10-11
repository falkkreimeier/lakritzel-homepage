import styled from "styled-components";
import Lakritzelimg from "./img/Lakritzel-Logo.svg";
import { Img } from "./Github";

function LinkZurLakritzelHomepage() {
  return (
    <Wrapper href="https://lakritzel.com">
      <ImageContainer>
        <Img src={Lakritzelimg} alt="Lakritzel, mein Schnaps" />
      </ImageContainer>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  grid-area: lakritzelHomepage;
`;

const ImageContainer = styled.div`
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

export default LinkZurLakritzelHomepage;
